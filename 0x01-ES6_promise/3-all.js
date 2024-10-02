import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises).then((resolve) => {
    console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);
  })
}
handleProfileSignup();
