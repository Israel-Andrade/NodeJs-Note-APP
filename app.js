console.log('Starting app.');


const fs = require('fs')
//require is a function pass in on;
//passing in the fs module
const os = require('os');



var user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username}!`);
