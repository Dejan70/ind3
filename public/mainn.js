let btn1 = document.querySelector('#addBtn1');
let input1 = document.querySelector('#input1');
let btn2 = document.querySelector('#addBtn2');
let input2 = document.querySelector('#input2');
let date_input = document.querySelector('#start');


//1
btn1.addEventListener('click',function(){
  let inputVal = input1.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/save');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
       document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:inputVal}));
          })

//2
btn2.addEventListener('click',function(){
    let inputVal = input2.value;
    let xml =new XMLHttpRequest();
    xml.open('post','/sav');
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status ==200){
            console.log(xml.responseText);
           // document.getElementById('a10').innerHTML=data[5].name; 
           document.getElementById('a1').innerHTML=xml.responseText;
           console.log("button");
        }}
           xml.setRequestHeader('Content-Type','application/json')
           xml.send(JSON.stringify({msg:inputVal}));
            })


function myFunction() {
  console.log("button");
              let x = document.getElementById("myDate").value;
              document.getElementById("demo").innerHTML = x;
              let inputVal = x;
              let xml =new XMLHttpRequest();
              xml.open('post','/date');
              xml.onreadystatechange = function(){
                  if(xml.readyState == 4 && xml.status ==200){
                      console.log(xml.responseText);
                     // document.getElementById('a10').innerHTML=data[5].name; 
                   //  document.getElementById('a1').innerHTML=xml.responseText;
                     console.log("button");
                  }}
                     xml.setRequestHeader('Content-Type','application/json')
                     xml.send(JSON.stringify({msg:inputVal}));

            }       
            
function date_1() {
              console.log("button2");
                          let x1 = document.getElementById("date_1").value;
                        let x2 = document.getElementById("date_2").value;
                        console.log("main x1 :", x1);
                        console.log("main x2 :", x2);
                        let date={1:x1,2:x2}
                       //   document.getElementById("demo_1").innerHTML = x1;
                      //    let inputVal = x1,x2;
                          let xml =new XMLHttpRequest();
                          xml.open('post','/date_1');
                          xml.onreadystatechange = function(){
                              if(xml.readyState == 4 && xml.status ==200){
                                  console.log(xml.responseText);
                                 // document.getElementById('a10').innerHTML=data[5].name; 
                               //  document.getElementById('a1').innerHTML=xml.responseText;
                                 console.log("button_1");
                              }}
                                 xml.setRequestHeader('Content-Type','application/json')
                             //    xml.send(JSON.stringify({msg:inputVal}));
                             xml.send(JSON.stringify({msg:date}));
            
                        }                        