import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  let result = [];

  try {
    const [userData, photoData] = await Promise.all([userPromise, photoPromise]);
    result.push({ status: userData.status, value: userData.value });
    result.push({ status: photoData.status, value: photoData.value });
  } catch (error) {
    result.push({ status: error.status, value: error.value });
    result.push({ status: 'rejected', value: `Error: ${error.message}` });
  }

  return result;
}

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

