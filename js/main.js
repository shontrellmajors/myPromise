const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Second!!");
  }, 2000);
});

const anotherPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Third!!!");
  }, 3000);
});

console.log("First!");
myPromise
  .then(console.log)
anotherPromise
  .then(console.log)
  