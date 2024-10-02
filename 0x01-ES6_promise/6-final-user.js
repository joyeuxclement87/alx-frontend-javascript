import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resolve = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  const arr = [];
  for (const staff of resolve) {
    arr.push({ status: staff.status, resolve: staff.resolve || staff.reason });
  }
  return arr;
}
