// working with promises
export default function getResponseFromAPI() {
  const working = true;
  return new Promise((resolve, reject) => {
    if (working) {
      resolve();
    } else {
      reject();
    }
  });
}
