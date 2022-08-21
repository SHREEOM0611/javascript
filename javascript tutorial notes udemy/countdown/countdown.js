// 1st part updating HTML


// console.log("js loaded");
//
// var countdownElement=document.getElementById("countdown")
// //  everything inside the htnl is stored in innerHtml property
// // accessing the html element
// console.log(countdownElement.innerHTML)
//
// ini_countdown=countdownElement.innerHTML;
//
// // setInterval(function(){
// // ini_countdown = ini_countdown > 0 ? ini_countdown -1 : 0;
// //   countdownElement.innerHTML=ini_countdown;
// // },1000);
//
// var bgImageElement= document.getElementById('img-blur');
// console.log(bgImageElement.src);
//
// setInterval(function(){
// if(ini_countdown>0){
//   countdownElement.innerHTML=ini_countdown-1;
//   ini_countdown--;
// }else {
//   countdownElement.innerHTML=0;
// }
//
// var backimgpath=ini_countdown%2==0?'background-1.jpg':'background-2.jpg'
// bgImageElement.src=backimgpath;
//   },1000);


// 2nd part UPDATING class
// 1st part updating HTML


console.log("js loaded");

var countdownElement=document.getElementById("countdown")
//  everything inside the htnl is stored in innerHtml property
// accessing the html element
console.log(countdownElement.innerHTML)

ini_countdown=countdownElement.innerHTML;

// setInterval(function(){
// ini_countdown = ini_countdown > 0 ? ini_countdown -1 : 0;
//   countdownElement.innerHTML=ini_countdown;
// },1000);

var bgImageElement= document.getElementById('img-blur');
console.log(bgImageElement.src);

var interval=setInterval(function(){
if(ini_countdown>0){ss
  countdownElement.innerHTML=ini_countdown-1;
  ini_countdown--;
}else {
  countdownElement.innerHTML=0;
}

var backimgpath=ini_countdown%2==0?'background-1.jpg':'background-2.jpg'
bgImageElement.src=backimgpath;

bgImageElement.style.width=ini_countdown*10+"%";


countdownElement.innerHTML=ini_countdown;
countdownElement.style.fontSize=ini_countdown*50+"px";  // all the property changes to camelcasing eg font-family=>fontFamily
if(ini_countdown<=0){
clearInterval(interval);}
  },1000);
