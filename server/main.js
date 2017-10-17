import { Meteor } from 'meteor/meteor';
Meteor.startup(function () {
UploadServer.init({
tmpDir: process.env.PWD + '/.uploads/tmp',
uploadDir: process.env.PWD + '/.uploads/',
checkCreateDirectories: true,
//   validateRequest: function(req) {
//    if (req.headers["content-length"] > 1000) {
//        return "File is too long!";
//    }
//    return null;
//  },
//  validateFile: function(file, req) {
//    // e.g. read file content
//    if (doSomethingWith(file.path)) {
//        return "Error Message";
//    }
//    return null;
//  },
getDirectory: function(fileInfo, formData) {

console.log('fileInfo:', fileInfo);
console.log('formData:', formData);
return formData.owner + '/' + formData.folder;
},
// getDirectory: function(fileInfo, formData) {
//   if (formData && formData.directoryName != null) {
//     return formData.directoryName;
//     // return '.pdf'
//   }
//   return "";
// },
// getFileName: function(fileInfo, formData) {
//   if (formData && formData.prefix != null) {
//     return formData.prefix + '_' + fileInfo.name;
//   }
//   return fileInfo.name;
// },
finished: function(fileInfo, formFields) {
if(formFields.uploadedForm == 'uploadXls'){
fileInfo.fileName = fileInfo.Name
}
}
});
});
