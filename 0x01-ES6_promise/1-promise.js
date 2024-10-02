// working on Using the prototype to  return a promis while The parameter is a boolean.
export default function (boolean) {
  return new Promise((resolve, reject) => {
    const Newobject = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(Newobject);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
