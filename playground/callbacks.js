var getUser = (id,callback) => {
  var user1 = {
    id: id,
    name: 'Jay'
  };
  var user2 = {
    id: id,
    name: 'Gos'
  };
  var userArray = [user1, user2]
  var hardCodedValue = 'hello ';

  // setTimeout(() => {
  //     callback(userArray,hardCodedValue);
  // },5000);
  callback(userArray,hardCodedValue);
};

getUser(31, (ar,hcv) => {

  console.log(hcv, ar[0].name);
  console.log(hcv, ar[1].name);

})
