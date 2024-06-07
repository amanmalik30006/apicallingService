import React, { useState, useEffect } from 'react';
import callApi from './apiCaller';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await callApi();
      setApiData(data);
    };

    fetchData();

    // Schedule API call every 3 minutes (180,000 milliseconds)
    const intervalId = setInterval(fetchData, 180000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

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