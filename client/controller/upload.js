Template.upload1.helpers({

  specificFormData: function() {
    return {
      uploadedForm: 'uploadXls',
    }
  },

  myCallbacks: function() {
   return {
    //  finished: function() { return { id: "232323", other: Session.get("ReactiveParam") } }
       finished: function(index, fileInfo, context) {
         console.log(fileInfo);
        }
      }
    }
});
