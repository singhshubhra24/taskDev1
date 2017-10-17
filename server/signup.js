Meteor.methods({
'user1' : function(json){
  users.insert(json);
  return Details.find({}).fetch();
  // var x= Details.find({}).fetch();
  // console.log(x);
}
})
