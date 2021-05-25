//const names = require("./4-names.js");
//const sayHi = require("./5-utils.js");
//const os = require("os");
//const path = require("path");
//const {readFileSync,writeFileSync} = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("<h1>Page 1 Created</h1>");
        res.end()
    }
    else if(req.url==="/about"){
        res.write("<h1>Welcome to about us Page</h1>");
        res.write("<p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>");    
        res.end();
    }
    else{
        res.write("<h1>Opps</h1>");
        res.end("<p>We could not find the requestrd page</p>");
    }

});


server.listen(5000);
// import sayHi from "./5-utils";
// import {pornStar,additionalRegistrar} from "./4-names";

// const number =12;
// if(number <12){
//     console.log("small");
// }
// else{
//     console.log("large");
// }
// console.log("Hello welcome to Node Express");
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(require);
// console.log(process);

// setInterval(()=>{
//     console.log("Hello  World")
// },1000);

//console.log(names);



// sayHi("Khizar");
// sayHi("Alchemist")
// sayHi(names.pornStar);
// sayHi(names.additionalRegistrar);



// //OS MODULE nodejs.org

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.userInfo());
// console.log(os.freemem());
// console.log(os.totalmem());
// //Built in Modules 



// //PATH MODULE


// console.log(path.win32.basename("C:\Movies\Web Development\Express js\app.js","js"));
// console.log(path.dirname("C:\Movies\Web Development\Express js\app.js"));
// console.log(path.sep);
// console.log(__dirname);
// console.log(path.resolve(__dirname));

// // FILE SYSTEM 

// console.log(readFileSync);
// const first = readFileSync("./content/first.txt","utf8");
// const second = readFileSync("./content/second.txt","utf8");
// console.log(first,second);

// writeFileSync("./content/result-sync.txt","Hello Result sync created using  writeFileSync");
