import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resolve) => {
    const arr = [];
    for (const staff of resolve) {
      arr.push({ status: staff.status, value: staff.value || staff.reason });
    }
    return arr;
  });
}
