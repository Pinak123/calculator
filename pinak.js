let arr=[];
let arr2=[];
let arr3=[];
let letter='';
let letter1='';
let element='';
let answere='';
let sample='',sample1='';
function clicks(x){
  letter ='';
  arr.push(x);
  for(let i=0; i<arr.length; i++){
      letter += arr[i];
  }
  document.getElementById('screen').innerHTML=letter;
}
function click1(y){
    arr2=[];
    arr2=arr2.concat(arr);
    arr2=arr2.concat(arr3);
    arr2.push(y);
    sample1=arr2.length-1;
    sample=arr2[sample1];
    // if(y=sample){
    //   arr2.pop();
    // };
    arr.splice(0,arr.length);
    document.getElementById('screen').innerHTML='';
    for (let index = 0; index < arr2.length; index++) {
         element += arr2[index];
        
    }
    document.getElementById('screen1').innerHTML=element;
    arr3=[];
}
function result(){
  arr2=[];
  arr3=[];
  arr2=arr2.concat(arr);
  document.getElementById('screen').innerHTML='';
  arr.splice(0,arr.length);
  for (let index = 0; index < arr2.length; index++) {
    element += arr2[index];
   
}
document.getElementById('screen1').innerHTML=element;
letter1=document.getElementById('screen1').innerText;
answere=eval(letter1);
arr3.push(answere);
document.getElementById('screen').innerHTML=`=> ${answere}`;
  arr=[];
  letter='';
  letter1='';
  element='';
  answere='';
  arr2=[];
  
}
function AC(){
  arr=[];
  arr2=[];
  letter='';
  letter1='';
  element='';
  answere='';
  sample=[];
  arr3=[];
  document.getElementById('screen').innerHTML='0';
  document.getElementById('screen1').innerHTML='0';
}
function deleate(){
 element='';
 letter='';
 let variable=document.getElementById('screen').innerHTML;
 let screen2=document.getElementById('screen1').innerHTML;
 if(variable!==""){
  document.getElementById('screen').innerHTML="";
   arr.pop();
   for(let i=0; i<arr.length; i++){
    letter += arr[i];
}
document.getElementById('screen').innerHTML=letter;
 }else{
  document.getElementById('screen1').innerHTML='';
   arr2.pop();
   for (let index = 0; index < arr2.length; index++) {
    element += arr2[index];
   
}
document.getElementById('screen1').innerHTML=element;
 } 
 arr3=[];
}