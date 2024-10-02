// working with promises
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(2);
    reject(new Error('nothing found'));
  });
}
