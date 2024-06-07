export default async function callApi() {
    try {
      // Replace with your actual API endpoint URL
      const url = 'https://predict-latest-1.onrender.com/api/code';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data; // Return the API response data
    } catch (error) {
      console.error('Error fetching API:', error);
      return null; // Handle errors gracefully, return null for now
    }
  }
