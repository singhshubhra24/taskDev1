Template.preview.helpers({
  counter1(){
    if(SessionStore.get("mySession"))
      {
        return SessionStore.get("mySession")
      }
      else
        {
          return SessionStore.get("mySession1")
        }
      },
  counter2(){
    if(SessionStore.get("mySession"))
    {
         return SessionStore.get("mySession")
         console.log(SessionStore.get("mySession"));
      }
    else{
        return SessionStore.get("mySession1")
      }
   }
})
Template.preview.events({
    'click .edit1':function(e){

          var value=Meteor.user().profile.st_details;
            SessionStore.set("mysession",value)
            console.log(SessionStore.get("mysession"));
            Router.go('personal');
          },

      'click .edit2':function(e){
                var value=Meteor.user().profile.part_details;
                SessionStore.set("mysession",value)
                console.log(SessionStore.get("mysession"));
                Router.go('parent');
              }

    })
