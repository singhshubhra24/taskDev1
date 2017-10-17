Template.login.events({
  'submit form#form2': function(event) {
         event.preventDefault();
            var myEmail = $('[name=email]').val();
            var myPassword = $('[name=password]').val();
            console.log(myEmail);
            console.log(myPassword);


         Meteor.loginWithPassword(myEmail, myPassword, function(error) {
           if(error){
             swal("Oopp!!!","You ve to signUp again.","error");

           }else{
             swal("successfully!!!","You are welcomed here.","success");
               Router.go('/main');
           }
       });
     }
    })
