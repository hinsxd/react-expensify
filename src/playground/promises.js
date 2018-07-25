const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve data');
  }, 1500);
});
promise.then(data => {
  console.log(data);
});
