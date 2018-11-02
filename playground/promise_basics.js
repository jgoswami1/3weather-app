
var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      } else {
        reject('Arguments must be number');
      }
    }, 2000);
  });
};

asyncAdd(4,3).then((res) => {
    console.log(' Added result is: ', res);
    asyncAdd(res, 5).then ((res) => {
        console.log('After 2nd call result must be 12::::', res);
    }, (err) => {
      console.log('Hello 2 ');
    });
}).catch ((logmessage) => {
  console.log(logmessage);
});

// var somePromise = new Promise((resolve, reject) => {
//       resolve('It worked.');
//       reject('It did not work.');
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message)
// }, (errorMessage) => {
//   console.log('Failure: ',errorMessage )
// });
