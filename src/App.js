import React, { useState, useEffect } from 'react';

// Function to call your API endpoint
export default async function callApi() {
  try {
    // Replace with your actual API endpoint URL
    const url = 'https://your-api-endpoint.com/your-endpoint';
    const response = await fetch(url);
    const data = await response.json();
    return data; // Return the API response data
  } catch (error) {
    console.error('Error fetching API:', error);
    return null; // Handle errors gracefully, return null for now
  }
}

function App() {
  const [apiData, setApiData] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time

  useEffect(() => {
    const fetchData = async () => {
      const data = await callApi();
      setApiData(data);
    };

    if (elapsedTime >= 180000) { // Check if 3 minutes have passed (180000 ms)
      fetchData();
      setElapsedTime(0); // Reset elapsed time
    }

    // Update elapsed time every second
    const intervalId = setInterval(() => setElapsedTime(prevTime => prevTime + 1000), 1000);

    return () => clearInterval(intervalId);
  }, [elapsedTime]); // Dependency on elapsedTime

  // Display or use the fetched API data here (optional)
  return (
    <div>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
