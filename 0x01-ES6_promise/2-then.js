function handleResponseFromAPI(promise) {
  return promise
    .then((data) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.log('Got a response from the API');
      throw new Error(error);
    });
