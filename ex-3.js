// Exercise #3: Uploading Progress

let totalFileSize = 250000;
let uploadedSize = 30000;

// Start coding here
let uploadProgress ;
uploadProgress = (uploadedSize/totalFileSize)*100;
console.log(`Uploaded file = ${uploadProgress}%`);