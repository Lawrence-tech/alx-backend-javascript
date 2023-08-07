import { createUser, uploadPhoto } from './utils';

// Handles the signup process for user profile by combining photo upload and user creation.
function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body: photoResult } = values[0];
      const { firstName, lastName } = values[1];

      console.log(`Photo upload: ${photoResult}, User: ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('System temporarily unavailable for signup.');
    });
}

export default handleProfileSignup;
