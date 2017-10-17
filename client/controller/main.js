Template.main.events({

      'click .login-button' : function(e){
          e.preventDefault();
          var next_tab = $('.nav-pills > .active').next('li').find('a');
          if(next_tab.length>0){
            next_tab.trigger('click');
          }
          else{
            $('.nav-pills li:eq(0) a').trigger('click');
          }
       }
})
