Template.signup.onRendered( function() {
  $('#form1').validate({
    rules :{
      name:{
        required:true,
        pattern:/^[A-Za-z ]{0,20}$/
      },
      mobile:{
        required:true,
        digits:true,
        rangelength:[10,10]
      },
      email: {
        required: true,
        email: true,
        rangelength:[5,40],
        remote: "http://localhost:3000/inputValidator"
      },
      password: {
        required: true,
        minlength:7,
        // pattern:/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$/
      },
      messages: {
      email: {
        required: 'Please enter an email address.',
        email: 'Please enter a <em>valid</em> email address.',
        pattern: "cfyfty",
        remote: $.validator.format("{0} is already associated with an account.")
      }
    }
    }
  });
});
Template.signup.events({

  'submit form#formTest' : function(e){
       e.preventDefault();
       var json='{';
       $(".xyz").each(function() {
           var x=$(this).attr("name");
           console.log(x);
           var y= $(this).val();
           console.log(y);
           json = json+ '"'+x+'":"'+ y + '",';

});

       json=JSON.parse(json.replace(/,\s*$/,'')+'}');
       console.log(json);

      //  Accounts.createUser(json, function(error) {
      //      if (Meteor.user()) {
      //         console.log(Meteor.userId());
      //         // Meteor.users.update({_id:Meteor.userId()}, {upsert:json});
      //         Router.go('login')
      //      } else {
      //         console.log("ERROR: " + error.reason);
      //      }
      //     });
          Accounts.createUser(
                 {
                    email:$('#email').val(),
                    password:$('#pas').val(),
                    username:$('#username').val(),
                    profile: {
                          Name: $('#name').val(),
                          Mobil:$('#mobile').val()
                        }
                      },function(error)
                        {
                            if (Meteor.user()) {
                                    console.log(Meteor.userId());
                                    var id = Meteor.userId();
                                    // Meteor.users.insert({
                                    //          name: 'shubhra',
                                    //     createdBy: id})
                                    // console.log(Accounts.users.findOne({username}).fetch({}));
                                    Meteor.users.update({_id:id}, {$set: { 'profile.Name': "krishna" }});
                                    // var x=Meteor.users.find({'name':profile.Name}).fetch();
                                    // console.log($('#name').val());
                                    // console.log(x);
                                    Router.go('login')
                                 } else {
                                    console.log("ERROR: " + error.reason);
                                 }

                    });
        // Accounts.users.find({json.password}).fetch({});
          // Meteor.users.find().fetch();

}
});
