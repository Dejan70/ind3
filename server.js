
var b = function b(post){
  console.log("startovana_b");
console.log("from server:",12345,post);
//const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
//dd=String("a");

//mm='abc'
//var ii="qwe";
//var ee="qwertzru"
//console.log("from server:", 222, querystring.stringify(post));
//const xstr = JSON.stringify(post);
//console.log("xstr",xstr);
//console.log("post_type:  ",typeof(post));
//console.log("ii ",post.msg );
//var uu=ee+mm+xstr
//console.log("uu: ",uu);
//let ff= uu.slice(19);
//console.log("ff: ",ff);

///let gg= ff.slice(0,-2);
//console.log("mm: ",gg);
//console.log("mm: ",post[1]);
//    const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
//const obj1 = JSON.parse(post);


//var side = read_prop(post, 'msg');
//let result = str.slice(1);
//let str = "GeeksforGeeks";
//ii = xstr.slice(1);
//ii=ee.slice(0, 2);
//ii=xstr.slice(0, 2);
//console.log("ii ",ii );

//console.lo g("json_sliced",result);
//console.log("json_sliced",myJSON.msg);
//dd=stringify(post);
//dd=stringify(post);
 //ii=post.toString();
//console.log("posst",dd);
//console.log("posst",post.msg);


};

module.exports.b = b;
function fun_2(a){ 
b=a;
  //   a=dd;
 // a=obj_1;
   //  return a; 
   console.log("fun_2:",b) 
   console.log("b.age:",b.age) 
   snd1[1].don=b.age;
 } 
 module.exports.fun_2= fun_2; 

//var sql = require("./sql");
var Api = require("./server2");
var fun = require("./server.js"); 

Api.a();
//console.log(Api.a)

//console.log("test:",Api.a)
console.log("fun:",fun.bb)
console.log("fun:",Api.bb(5,5))
console.log("fun_11:",Api.fun_1())
setInterval( function() {
 // console.log("fun_11_from server:",Api.fun_1())

}, 1000);










//const port = 80;  //digital ocean
const port = 1880;  //OliMih


let app    = require('express')();
let server = app.listen(port);
let io     = require('socket.io')(server);
/*
var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(app);
*/

/*    novi server API http
var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World_server\n');
    });
});

console.log('Listening on port 3000');
*/

//dodatak server API
var querystring = require('querystring');
server.on('request', function (req, res) {
  if (req.method == 'POST') {
      var body = '';
  }

  req.on('data', function (data) {
      body += data;
  });

  req.on('end', function () {
      var post = querystring.parse(body);
      //console.log(post);

     // res.writeHead(200, {'Content-Type': 'text/plain'});
     // res.end('Hello World_server\n');
    // res.end("Sve ok1");
  });
});

// kraj dodatak server api
///  soc
//soc 2
app.get('/', function(req, res){
    //send the index.html file for all requests
   // res.sendFile(__dirname + '/index.html');
   '/index.html'
   res.sendFile(__dirname + "/public");

  });
   // http.listen(3001, function(){
   //   http.listen(1880, function(){
    //console.log('listening on *:3001');
 // });
/*
 const snd1=[
  {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
  {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
  {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
  {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,}

]
*/
const snd1=[
  {donut: 1 ,result:"0",name:"0",ip:"0", num:77,lay:"nn", x:1,y:5,year:3,month:3,day:3,minite:3,pieces:3, target:3,oee:3,product_type:"Shaft",
    target_max:3,shift_1:3,shift_2:3,shift_2_pcs:3,shift_3_pcs:3,production:1,op10:1,op20:1,op30:1,op40:1,op45:1
  },
  {don: 1 ,resu:"0"}
 

]

  setInterval( function() {
   // let gg=Api.bb(q);
   //let gg=fun.bb();
  
   // var msg = Math.random();
 
  
   var msg = "‚23";
 // snd1[1].name0="deki";
   // io.emit('message', msg);
   io.emit('message', snd1);
    // io.emit( msg);
    //console.log (msg);
  }, 1000);
//soc 2 end

  const express = require('express');
//iz  const app = express();
app.use(express.json());
app.use(express.static(__dirname +"/public"));
//app.use(express.static(__dirname +'/index.html'));

app.post('/save',(req,res) => {
  snd1[0].name0="777";
    let msg = req.body.msg;
    console.log("test:",Api.bb)
    res.send("Sve ok1");
    
            })

app.post('/sav',(req,res) => {
    let msg = req.body.msg;
    snd1[0].name0="333";
    res.send("Sve ok2");
             })
             console.log('listening to port 1880-server');

                        
         
 //  var mm=fn1(m) ;
 //  console.log(mm);
 //  import { fn1 } from "./file1.js";
//f1();       

