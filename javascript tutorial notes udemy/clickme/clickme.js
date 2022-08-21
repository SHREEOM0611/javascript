var btn=document.getElementById("clik");
console.log("script loaded");
// btn.onclick= function(){
//   alert("button clicked");
//   btn.style.color='red';
//   btn.style.backgroundColor='blue';
// }
// another ways

//  function  btnclik(){
//   alert("button clicked");
//   btn.style.color='red';
//   btn.style.backgroundColor='blue';
// }
// btn.onclick=btnclik; // paranthesis will execute the code before we will click the button


// 2nd method addEventListener
// btn.addEventListener('click',function(){
//   alert('anonymous function event listener');
// })

var mainDiv=document.querySelector("body");
mainDiv.style.backgroundColor='red';
function onbtnclick(){

  mainDiv.style.backgroundColor= "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}
btn.onclick=onbtnclick;
