// How NodeJs differs from Vanilla JS
// 1) Node runs on server - not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello World");
// 3) Global object instead of window object
console.log(global);
// 4) Hass Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require("os"); // It provides operating system-related utility methods and properties
const path = require("path"); // It provides utilities for working with file and directory paths
const { add, sub, multiply, divide } = require("./math"); // desctrucure import

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.cpus());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
