// var username=document.getElementById('username');
//
// console.log(username);
//
// username.addEventListener('change',function(){
//   console.log('value changes');
// })
//
// username.addEventListener('input',function(){
//   console.log('value changes');
// })
//
// username.addEventListener('input',function(event){
//   console.log(event.target);
// })
//
// username.addEventListener('input',function(event){
//   console.log(event.target.value);
// })
//
// username.addEventListener('input',function(event){
// var  currentvalue= event.target.value;
// currentvalue=currentvalue.toUpperCase();
//   console.log(event.target.value);
// })
//
//
//
//
// username.addEventListener('focus',function(){
//   console.log('element focused');
// })
//
// username.addEventListener('blur',function(){
//   console.log('loses the focus');
// })
//
// var loginform=document.getElementById('login-form');
// loginform.addEventListener('submit',function(e){
//   // console.log("submitted");// as clicking login will refresh the page so use alert
// alert("submitted");
// e.preventDefault();
// })
//
//
//
//
// // keyboard events
// // keydown: any key is pressed
//  //keyup: when key is released after it's keydown events
//  // keypress:  any key except shift, functiona nd capslock.
//  document.body.addEventListener('keydown',function(){
//    console.log('a key is pressed');
//  })
//
//  document.body.addEventListener('keydown',function(e){
//    var keyCode=e.keyCode;
//    console.log(keyCode +  ' key is pressed');
//    if(keyCode==13){
//   console.log('enter is pressed');
//    }
//  })
// //https://keycode.info/
//
// // https://drive.google.com/drive/folders/1eW0q8xrMv3sBilXoWmre98kpuvhp4jH3
//
// // mousedown: when either left or right mouse key is pressed on html element
// // mouseup: when either key is released after the mousedown eveny
// // click: when  left mouse button is pressed and released on the same html element, it requires the mousedown and mouseup event to happen before click event
// // dbclick: when left button is pressed twice
// // mouseover:when mouse enters the html element
// // mouseenter: when the mouse pointer enter the html element
// // mousemove: when mouse pointer is moved over the html element
//
// document.body.addEventListener('mousedown',function(){
//   console.log('mousedown');
// })
//
// document.body.addEventListener('mouseup',function(){
//   console.log('mouseup');
// })
//
// document.body.addEventListener('click',function(){
//   console.log('mouse click');
// })
//
// document.body.addEventListener('dblclick',function(){
//   console.log('double click);
// })
//
// var overcount=0;
// document.body.addEventListener('mouseover',function(){
//   var count=document.querySelector('#over > p');
//   overcount +=1;
//   count.innerHTML=overcount;
//   console.log('a key is pressed');
// })



//CREATE A HTML ELEMENT


var list=document.getElementById('todo-list');
var btnAdd=document.getElementById('add-item');
var firstItem=document.getElementById('item1')

list.childElementCount// give the number of child nodes
btnAdd.addEventListener('click',function(){
  var newListEle=document.createElement('li');
var textNode=document.createTextNode('list item '+ (list.childElementCount+1));
  newListEle.appendChild(textNode);
  newListEle.id="item3";
  console.log(newListEle);


var firstItem=list.firstElementChild;
//  list.appendChild(newListEle);
list.insertBefore(newListEle,firstItem);

})

// js provides a way to insert the child node before a another node name



// update and delete the html elements
var list=document.getElementById('todo-list');
var inputBox=document.getElementById('todo-input');
var btnAdd=document.getElementById('add-item');
var updateItem=document.getElementById('update-item');
var btnRemove=document.getElementById('remove-item');

var currentInput='';
inputBox.addEventListener('input',function(e){
  currentInput=e.target.value;
});

inputBox.addEventListener('keyup',function(e){
  if(e.keyCode==13){
    addListItem();
  }
});


function createNewNode(){
  var newListEle=document.createElement('li');
  var textNode=document.createTextNode(currentInput);
  newListEle.appendChild(textNode);
  newListEle.id="item3";
  return newListEle;
}
function addListItem(){
  if(currentInput !==undefined && currentInput!==null || currentInput !==''){
    var newListEle=createNewNode();
    list.appendChild(newListEle);
    console.log(list.childElementCount);

    inputBox.value='';
    currentInput='';
  }else{
    alert('please enter a valid todo item');
  }
  }

btnAdd.addEventListener('click',addListItem);
btnUpdate.addEventListener('click',function(){
  alert('update clicked');
  var firstEle=list.firstElementChild;
  var newListEle=createNewNode();
  list.replaceChild(newListEle,firstEle);
});


btnRemove.addEventListener('click',function(){
  var firstEle=list.firstElementChild;
  list.removeChild(firstEle);
})


// list.childElementCount// give the number of child nodes
// btnAdd.addEventListener('click',function(){
//   var newListEle=document.createElement('li');
// var textNode=document.createTextNode('list item '+ (list.childElementCount+1));
//   newListEle.appendChild(textNode);
//   newListEle.id="item3";
//   console.log(newListEle);
//
//
// var firstItem=list.firstElementChild;
// //  list.appendChild(newListEle);
// list.insertBefore(newListEle,firstItem);

// })
