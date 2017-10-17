
Meteor.methods({
'pers' : function(json1){
  console.log(json1);
  console.log(Meteor.userId());
      Meteor.users.update(
                  {_id : Meteor.userId()},
                  {$set:
                      {
                        'profile.st_details':json1

                      }
                  },
                  {
                    upsert:true
                    }
               );
               return json1;
  }
})

Meteor.methods({
'pers1' : function(json2){
  console.log(json2);
  console.log(Meteor.userId());
      Meteor.users.update(
                  {_id : Meteor.userId()},
                  {$set:
                      {
                        'profile.st_details':json2

                      }
                    }
                );
               return json2;
  }
})
