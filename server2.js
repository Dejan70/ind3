var sql = require("./server.js");

sql.b();
function bb(q){
return 100;
}
function sum(a, b) { 
    return a + b; 
} 
var  dd="abcde";
function fun_1(a) { 
 //   a=dd;
 a=obj_1;
    return a; 
} 
var obj_1 ={"name":"John", "age":30, "city":"New York"};
module.exports.sum= sum; 
module.exports.fun_1= fun_1; 
module.exports.bb = bb;
var a = function a(){
  
var http = require('http');
var querystring = require('querystring');

//var server = http.createServer().listen(3000);
//var server = http.createServer().listen(443);  //DigitalOcean
var server = http.createServer().listen(1882);  //OliMih

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        console.log("data :",data);
        body += data;
        console.log("body_new : ",body);
        let ww =JSON.parse(body);
        obj_1=ww;
        console.log("object : ",ww);
        tren=777;
        sql.fun_2(ww);

    });

    req.on('end', function () {

        console.log("body: ",body);
      //  typeof(post)
    //  let tip=typeof(body);
     //   console.log("body: ",tip);
     //  let ww =JSON.parse(body)
    // let oo =JSON.parse(body)   let gg= ff.slice(0,-2);
   // let oo =body.slice(0,-1);
  // let oo =body;
  //  console.log("oo : ",oo);
 //   let am =JSON.parse(oo);
 //   console.log("am: ",am)
 //   console.log("am[0]: ",am[0]);
try {
    console.log("am[0]: ",am.city);
} catch (error) {
    console.log("errr "); 
}






        var post = querystring.parse(body);
        console.log("post_new: ",post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World_server\n');
     //   sql.b(post);
     
    });
});

console.log('Listening on port 443- api');

};
//export function add(a, b) {
    //return a + b;
//  }
module.exports.a = a;
//export function f1() {a=2}
module.exports.bb = bb;
  
