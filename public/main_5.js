
/*
let btn1 = document.querySelector('#addBtn1');
btn1.addEventListener('click',function(){
    document.getElementById("a1").innerHTML = 44;
//console.log("77733333")
            });
  

*/
btn1.addEventListener('click',function(){
   // let inputVal = input1.value;
    let xml =new XMLHttpRequest();
    xml.open('post','/save');
    xml.onreadystatechange = function(){
      if(xml.readyState == 4 && xml.status ==200){
        //  console.log(xml.responseText);
         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;
       }}
          xml.setRequestHeader('Content-Type','application/json')
          xml.send(JSON.stringify({msg:inputVal}));
            })
/*
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
  */
/*
fun1()
{
console.log("777");

}

*/