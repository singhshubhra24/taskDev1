Meteor.methods({
'pars' : function(json){
  console.log(json);
  console.log(Meteor.userId());
      Meteor.users.update(
                  {_id : Meteor.userId()},
                  {$set:
                      {
                        'profile.part_details':json

                      }
                  },
                  {
                    upsert:true
                    }
               );
               return json2;
  },

  'pars1' : function(json2){
    console.log(json2);
    console.log(Meteor.userId());
        Meteor.users.update(
                    {_id : Meteor.userId()},
                    {$set:
                        {
                          'profile.part_details':json2

                        }
                    }

                 );
                 return json2;
    }
  })
