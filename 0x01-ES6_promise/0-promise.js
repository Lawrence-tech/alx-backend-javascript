// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Here, you can perform your API call or any asynchronous operation.
    // For demonstration purposes, let's resolve with a sample response after a short delay.
    setTimeout(() => {
      const sampleResponse = { data: 'Sample response from API' };
      resolve(sampleResponse);
    }, 1000); // Simulating an asynchronous delay of 1 second.
  });
}

export default getResponseFromAPI;
