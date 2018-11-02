console.log ('Starting app');

setTimeout(() => {
   console.log('This is the 1st timeout');
},5000);

setTimeout(() => {
   console.log('This is the 2nd timeout');
},2000);

setTimeout(() => {
   console.log('This is the 3rd timeout');
},0);

console.log('Finishing app');
