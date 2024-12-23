const express = require('express');
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