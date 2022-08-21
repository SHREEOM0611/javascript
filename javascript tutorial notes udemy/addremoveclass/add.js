var mainheading=document.getElementById("main-heading");
console.log(mainheading.classList);
mainheading.classList.add('big');

var btn=document.getElementById('clik');
btn.addEventListener('click',function(){
  mainheading.classList.remove('big');
})
// setTimeout(function(){
//   mainheading.classList.remove('big');
// },1500)
