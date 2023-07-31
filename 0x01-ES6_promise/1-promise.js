export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve the promise with the response object
      resolve({ status: 200, body: 'Success' });
    } else {
      // If success is false, reject the promise with an error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Example usage:
// getFullResponseFromAPI(true)
//   .then(response => console.log('Response:', response))
//   .catch(error => console.error('Error:', error.message));

// getFullResponseFromAPI(false)
//   .then(response => console.log('Response:', response))
//   .catch(error => console.error('Error:', error.message));
