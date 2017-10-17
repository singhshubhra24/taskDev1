Template.personal.events({

  'click #sub_btn' : function(e){
    // 'submit form#formTes': function(e){
         e.preventDefault();
         json1='{';
         $(".xyz").each(function(){

             var x=$(this).attr("name");
             console.log(x);
             var y=$(this).val();
             console.log(y);
             json1 += '"' + $(this).attr("name") + '":"' + $(this).val() + '",';
   })
         json1=JSON.parse(json1.replace(/,\s*$/,'')+'}')
         console.log(json1);
         Meteor.call('pers', json1, function(error,value){
             if(error){
               alert("error");
             }
             else{
               console.log(value);
               SessionStore.set('mySession', value);
               console.log(SessionStore.get("mySession"));
              swal("i m happy")
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

Template.personal.helpers({
  counter3() {
      console.log(SessionStore.get("mysession"));
        return SessionStore.get("mySession")
//       _.each(getData, function(item, key){
//            console.log(key +'[[]]'+ item);
//            var getName=$("#formTes [name="+key+"]").attr("name");
//            console.log($("#formTes [name="+key+"]"));
//            console.log(getName);
//            console.log(']]]]');
//            if(getName==key){
//              //  $("#form3[@name="'+key+'"]*").val(item);
//                $("[name="+key+"]").val(item);
//           }
//            Meteor.setTimeout(function(){
//
//                 var getName=$("[name="+key+"]").attr("name");
//                 if(getName==key){
//
//                     $("[name="+key+"]").val(item);
//                }
//
//         },1000)
//       })
//       if(getData.length> 0){
//         getData.forEach(function(data){
//           console.log(data);
//
//         })
//       }
    },
    'showBtn':function() {
        if (SessionStore.get("mysession")) {
          console.log("hhhjgh");
          return true;
        }else {
          return false;
        }
    }
})

Template.personal.onCreated(function helloOnCreated() {
  this.updateBtnVar = new ReactiveVar(false);
});
