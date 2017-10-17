Meteor.methods({
'table1' : function(){
    var x=Details.find({}).fetch();
    console.log(x);
    return x;
}
})
Meteor.methods({
  'table': function(id) {
     var x=Meteor.users.find({'_id':id}).fetch();
     console.log(x);
     return x;
  }
})
