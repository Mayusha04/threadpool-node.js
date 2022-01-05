// const fs = require("fs");
// const start = Date.now();
// setTimeout(()=>console.log("Timer 1 finished"),0);
// setImmediate(()=> console.log("Immediate 1 finished"));
// fs.readFile("rest-file.txt",()=>{
//     console.log("I/O finished");
//     console.log("-------");
//     setTimeout(()=> console.log("Timer 2 finished"),1000);
//     setTimeout(()=> console.log("Timer 2 finished"),6000);
//     setImmediate(()=> console.log("Immediate 2 finished"),0);

//     process.nextTick(()=> console.log("process.nextTick"));
//     crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
//     console.log(Date.now() - start,"Password encrypted");

//     crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
//     console.log(Date.now() - start,"Password encrypted");

//     crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
//     console.log(Date.now() - start,"Password encrypted");

//     crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
//     console.log(Date.now() - start,"password encrypted");

// });
// console.log("Hello from the top-level code");
const fs= require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(()=>console.log("Timer  1 finished"),0);
setImmediate(()=> console.log("Immediate 1 finished"));

fs.readFile("rest-file.txt",()=>{
    console.log("I/O finished");
    console.log("-----------");

    setTimeout(()=> console.log("Timer 2 finished"),1000);
    setTimeout(()=> console.log("Timer 3 finished"),5000);
    setImmediate(()=> console.log("Immediate 2 finished"),0);
    

    process.nextTick(()=> console.log("process.nextTick"));

    crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
    console.log(Date.now() - start,"password encrypted");

    crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
    console.log(Date.now() - start,"password encrypted");

    crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
    console.log(Date.now() - start,"password encrypted");

    crypto.pbkdf2Sync("password","salt", 100000, 1024,"sha512");
    console.log(Date.now() - start,"password encrypted");

});

console.log("Hello from the top-level code");