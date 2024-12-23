
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







//*********   SQLITE */
//onst express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zf.db', (err) => {
  if (err) { console.error(err.message); }
  console.log('Connected to the zf.db database.');});
/*

  //  **************odredjeni podatak get *********************
db.serialize(() => {

//db.run(`INSERT INTO ping(name,password) VALUES('123','abc')`, (err) => {
 //     if (err) { console.log(err); throw err;}});
 
 // db.each(`SELECT * FROM ping where number=10`, (err, row) => {if (err) {  console.log(err);throw err; };  console.log(row);z10=row.name;z10_num=row.number});
 // db.each(`SELECT * FROM ping where number=11`, (err, row) => {if (err) {  console.log(err);throw err; };  console.log(row);z11=row.name;z11_num=row.number});
  db.each(`SELECT * FROM ping where number=12`, (err, row) => {if (err) {  console.log(err);throw err; };  console.log(row);z12=row.name;z12_num=row.number});

});

*/

/*
//          **************UPDATE***************** *
//  let sql = `UPDATE ping SET name= ?,layout=? WHERE number = ?`; 
//let sql = `UPDATE ping SET name= ? WHERE number = 1`; //******samo 1 update

let sql = `UPDATE ping SET name= ?,layout=? WHERE number = 2`; //******2 update
var ge="a";
var ge1="b";
var ge2="c";

//db.get(sql, [ge,ge1,ge2], (err, row) => {
//  db.get(sql,ge2, (err, row) => {  //*******samo 1 update

    db.get(sql,[ge1,ge2], (err, row) => {     //*******2 update
if (err) {
throw err;
}
console.log("done");
});
*/

//******************* INSERT**********************

 //   ****1******

 
  var ge="ama";
  var ge1="baba";
  var ge2="c";
  db.run('INSERT INTO ping(number, name) VALUES(?, ?)', [ge,ge1], (err) => {




  if(err) {
		return console.log(err.message); 
	}
	console.log('Row was added to the table: ${this.lastID}');
})

//********************insert end */


//******************* Delete where**********************
let sql = `DELETE FROM ping  WHERE number =? `;

db.get(sql,8, (err, row) => {     //*******2 update
  if (err) {
  throw err;
  }
  console.log("done");
  });
  //******************* Delete wherer end**********************
//*********   SQLITE END*/

//cam  
//const HTTP_PORT = 1880; //OliMih
//const port = 80;  //digital ocean
const HTTP_PORT = 80;  //digital ocean
//require('child_process').fork('some_code.js');  //   call stream
//require('child_process').fork('express-app.js'); 
let app    = require('express')();
let server = app.listen(HTTP_PORT);
let io     = require('socket.io')(server);

  
const MjpegProxy = require('mjpeg-proxy').MjpegProxy;
const express = require('express');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
//

//const cam1 = "http://192.168.2.31/videostream.cgi?user=admin&pwd=admin";
const cam1 = "http://192.168.1.14:8003/?action=stream";

//const cam2 = "http://192.168.2.30/videostream.cgi?user=admin&pwd=admin";
const cam2 = "http://192.168.1.14:8004/?action=stream";

//var app = express();
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(morgan('tiny'));
app.set("view options", { layout: false });
//app.use(express.static(__dirname + '/public'));

app.get('/index1.jpg', new MjpegProxy(cam1).proxyRequest);
app.get('/index2.jpg', new MjpegProxy(cam2).proxyRequest);

//app.listen(HTTP_PORT);

console.log("Listening on port " + HTTP_PORT);

/// cam end

//const port = 80;  //digital ocean
//const HTTP_PORT = 1880;  //OliMih


//let app    = require('express')();
//let server = app.listen(HTTP_PORT);
//let io     = require('socket.io')(server);
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

 // const express = require('express');
//iz  const app = express();
app.use(express.json());
app.use(express.static(__dirname +"/public"));
//app.use(express.static(__dirname +'/index.html'));

app.post('/save',(req,res) => {        /////************************BUTTON1 */
  snd1[0].name0="777";
    let msg = req.body.msg;
    console.log("msg:",msg);


    //******date */
    const d = new Date();
    console.log("date_:",d);
    let year=d.getFullYear();let month = d.getMonth();var date=d.getDate();var hour =d.getHours(); var min =d.getMinutes();var sec = d.getSeconds();var msec =d.getMilliseconds();
  //  console.log("year :",year);console.log("date :",date);  console.log("hour :",hour); console.log("min :",min); console.log("sec :",sec);console.log("msec :",msec);
//let tmst=querystring.stringify(year+":"+month+":"+date+":"+hour+":"+min+":"+sec+":"+msec);
//let tmst=year+":"+month+":"+date+":"+hour+":"+min+":"+sec+":"+msec;
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];//const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let month_1 = months[d.getMonth()];
console.log("month_1 :",month_1);
//let tmst=year+":"+month_1+":"+date+"-"+hour+":"+min+":"+sec+":"+msec;
let tmst=year+":"+month_1+":"+date+"-"+hour+":"+min+":"+sec;
let tmiso=year+"-"+month+"-"+date+" "+hour+":"+min;

//let tmst=year+":"+month+":"+date+":"+hour+":"+min+":"+sec+":"+msec);
console.log("tmst :",tmst);
console.log("tmiso :",tmiso);

    //******************* INSERT**********************
 // var ge="a";
 var ge=msg;
  var ge1=tmiso;
  var ge2="c";
  db.run('INSERT INTO ping(number, name) VALUES(?, ?)', [ge,ge1], (err) => {

  if(err) {
		return console.log(err.message); 
	}
	console.log('Row was added to the table: ${this.lastID}');
})

//********************insert end */

 //  console.log("test:",Api.bb)
 console.log("b_1");
    res.send("Sve ok1");
    
            })
 var arr = [0, 1];

app.post('/sav',(req,res) => {             //////////*********BUTTON2 */
  //  let msg = req.body.msg;
 //   snd1[0].name0="333";
 arr = [0];
 let i=0;
 db.all(`SELECT * FROM ping where number=12`, (err, row) => {if (err) {
    console.log(err);   throw err; }; 
    const numRows = row.length;
    i=i+1;
    arr.push(i+1);
    try{arr[i]=row;}
    catch{
      console.log("upis");
    }
    for (let ii = 0; ii < numRows; ii++) {
        if (ii === numRows - 1) {
            // Last row...
             console.log("arr:",arr);
            console.log("ii:",ii);
        }    
    }
    
   
    console.log("i:",i);
   
  //  console.log(arr); // [0, 1, 2, 3, 4]
 
   
   
  //  console.log("row",row);z12=row.name;
   // z12_num=row.number
  });
    console.log("arr:",arr);
 console.log("b_2");
    res.send("Sve ok2");
             })


app.post('/date',(req,res) => {             //////////*********DATE */
              let msg = req.body.msg;
           //   snd1[0].name0="333";
           console.log("date");
           console.log("date_server:",msg);
              res.send("Sve ok2");
                       })

app.post('/date_1',(req,res) => {             //////////*********DATE */
                        let msg = req.body.msg;
                     //   snd1[0].name0="333";
                     console.log("date_1");
                     console.log("date_1-msg[1]: ",msg[1]);
                     var x=msg[1];
                     console.log("x :",x);
                     x = x.replace("T", " ");
                     console.log("x_after :",x);

                     console.log("date_1_server:",msg);
                     var ge=msg;
                     var ge1=msg[1];
                     var ge2="c";
                     db.run('INSERT INTO ping(number, name) VALUES(?, ?)', [ge,ge1], (err) => {
                   
                     if(err) {
                       return console.log(err.message); 
                     }
                     console.log('Row was added to the table: ${this.lastID}');
                   })              
                        res.send("Sve ok2");
                                 })             


             console.log('listening to port 1880-server');

                        
         
 //  var mm=fn1(m) ;
 //  console.log(mm);
 //  import { fn1 } from "./file1.js";
//f1();       

