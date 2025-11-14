// Node.js Basics
// Javascript runtime environment
// Ryan dahl - google chrome ka v8 engine ka code open source hain and Ryan us code mein chedchaani kr raha hain
// Introduction to node.js
// InstallingNodejs and npm 
// Working with modules 
// Undesrstanding HTTP module 

const fs = require('fs');

// fs.writeFile("example.txt", "Helo this is new file", function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// });

// fs.appendFile("example.txt", ". This is the appended content", function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// });

// fs.rename("example.txt", "renamed.txt", function(err){
//     if (err) console.log(err);
//     else console.log("Done")
// })

// fs.copyFile("renamed.txt", "./Copy/copy.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Done")
// })

fs.unlink("renamed.txt", function(err){
    if(err) console.log(err);
    else console,log("Done")
})

// writefile 
// appendfile
// copyfile
// rename 
// unlink 