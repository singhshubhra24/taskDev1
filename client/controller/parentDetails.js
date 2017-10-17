Template.parent.events({

  'click #sub_btn' : function(e){
    // 'submit form#formT': function(e){
      e.preventDefault();
         json='{';
         $(".xyz").each(function(){

             var x=$(this).attr("name");
             console.log(x);
             var y=$(this).val();
             console.log(y);
             json=json+ '"' +x+ '":"' +y+ '",';
   })
         json=JSON.parse(json.replace(/,\s*$/,'')+'}')
         console.log(json);
         Meteor.call('pars', json, function(error,value){
             if(error){
               alert("error");
             }
             else{
               console.log(value);
               SessionStore.set('mySession', value);
               console.log(SessionStore.get("mySession"));
               swal("inserted successfully")

             }
           });
    },
    'click #updatebtn' : function(e){
      // 'submit form#formTes': function(e){
           e.preventDefault();
           json2='{';
           $(".xyz").each(function(){

               var x=$(this).attr("name");
               console.log(x);
               var y=$(this).val();
               console.log(y);
               json2 += '"' + $(this).attr("name") + '":"' + $(this).val() + '",';
     })
               json2=JSON.parse(json2.replace(/,\s*$/,'')+'}')
               console.log(json2);
               Meteor.call('pers1', json2, function(error,value){
                   if(error){
                     alert("error");
                   }
                   else{
                     console.log(value);
                     SessionStore.set('mySession1', value);
                     console.log(SessionStore.get("mySession1"));
                     swal("updated successfully")
                     Router.go('preview')
               }
             });
     }
})

Template.parent.helpers({
  'showBtn':function() {
      if (SessionStore.get("mysession")) {
        console.log("hhhjgh");
        return true;
      }else {
        return false;
      }
  },
  counter4(){
      console.log(SessionStore.get("mysession"));
      return SessionStore.get("mysession")
  }
})
