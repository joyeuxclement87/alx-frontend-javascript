export default function uploadPhoto(filename) {
  return Promise.reject(new Error(console.log(`${filename} cannot be processed`)));
}
