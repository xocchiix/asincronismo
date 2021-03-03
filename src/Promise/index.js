const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey lo logramos!!");
    } else {
      reject("Wooops!! no se pudo");
    }
  });
};

somethingWillHappen()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoops!!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of Promises", response))
  .catch((err) => console.error(err));
// Promise.all([Promesa1, Promesa2]) => retorna un Array de promesas
