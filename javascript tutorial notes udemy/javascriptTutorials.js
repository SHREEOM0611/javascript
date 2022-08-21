//JAVASCRIPT CONSOLE APIs
//   document.querySelector("id, class")
//   document.querySelector("id, class").click()
// document.getElementById("id").click()

// console.time('Your code took');
/* console.log("Hello con");
console.log(34);
console.log(30+82);
console.log(true);
console.log([1,2,3,4,5]);
console.log({subject: 'javascript',marks:10});
console.table({subject: 'javascript',marks:10});
console.warn('this is warning');
//console.clear();
console.timeEnd('Your code took');
age=200;
*/
//console.assert(age<180,'This is not possible');
//console.error('this is an error');
//  ctrl+/ single line comment
/*
multi line
comment
*/

/* ways to print in JAVASCRIPT
console.log("hello world");
document.write("this is document write");
console.assert(4==6);
console.assert(4==4);
*/

//JAVASCRIPT VARIABLES
 /*
1. primitive data type- stack-> string,
 number,
 boolean=b true and false
 , null= nothing
 ,undefined= initial value
 , symbol
2. reference data type- heap-> arrays, objects, literals, functions, dates
*/


/* */
// PRIMITIVE DATATYPES
// STRING
// let name="OM SHREE";
// console.log('MY NAME IS '+ name);
// console.log('DATATYPE IS '+ typeof(name));
// var s="This is example string";

// JS string in built FUNCTIONS  strings are case sensitive
// STRING METHODS
// let s= "Harry is a good boy good";
// console.log(s.length);
// console.log(s.indexOf("good"));
// console.log(s.lastIndexOf("good")); // last occurence of good
// console.log(s.slice(1,3)); // slice from starting to ending position-1
// console.log(s.slice(1))   // slice 1 to end
// console.log(s.substr(0,4));
// toUpperCase()   converts string to toUpperCaseconsole.log
// console.log(s.toUpperCase())
// // toLowerCase()
// // concat()- merges two or more strings
// var fname="OM ";
// var lname="SHREE";
// console.log(fname.concat(lname));
// console.log(s.concat(' ',fname,' '));
// console.log(fname+' '+lname);
// // trim() - it removes extra spaces
// var s='          my string       ';
// console.log(s.trim());
//
// // charAt() -> this take a position as an arg and returns character a that position
//
// var charAtExampleString='this is my test string';
// console.log(charAtExampleString.charAt(5));
// console.log(charAtExampleString.charAt());
//
// // split -> splits our string on the basis of arguement passed.
// console.log(charAtExampleString.split(' '));
// console.log(charAtExampleString.split());


// d=s.replace("Harry",'Rohan'); // replace 1st appearance of string
// console.log(d);

/*


// numbers
let marks=34;
console.log('MARK  IS '+ marks);
console.log('DATATYPE IS '+ typeof(marks));

//IN BUILT NUMBER functions
//toString()
// var num1=10;
// console.log(num1);
// console.log(num1.toString());
// console.log(typeof(num1.toString()));
// // parseInt() string numerals as input and returns a numbers return NaN if inout string is not a number
// var stri="10";
// var stri2="20.3";
// console.log(parseInt(stri));
// console.log(parseInt(stri2));
// // parseFloat() string numerals as input and returns floating number
// console.log(parseFloat(stri));
// // toFixed() takes the number and round it off to given position
// var strfloat=87.0564548;
// console.log(strfloat.toFixed());  // no parameter passes so, convert to integer.
// console.log(strfloat.toFixed(2));
// console.log(strfloat.toFixed(5));



// boolean
let isdriver=true;
console.log("DATATYPE IS "+(typeof(isdriver));

// NULL
let isNULL=null;
console.log("DATATYPE IS "+(typeof(isNULL));
*/
// undefined
 // let undef= undefined;
 // console.log("DATATYPE IS "+    (typeof undef));

// symbol
/*

// REFERENCIAL DATATYPES

 //array
myarr=[1,2,3,4];
console.log("DATATYPE IS "+    (typeof myarr));
myarr1=[1,2,3,4,true,"hello"];
console.log("DATATYPE IS "+    (typeof myarr1));

// object literals
let stMarks={harry:89,shubham:36,rohan:34}
console.log("DATATYPE IS "+    (typeof stMarks));


function findname(){

}
console.log("DATATYPE IS "+    (typeof findname));

let date= new Date();
console.log("DATATYPE IS "+    (typeof date));
console.log("constant and variable");

*/

// variable in js
// var, let, const

// var name = "om 'shree ";
// console.log(name);
// var channel;
// console.log(name,channel);
// channel= 'code with harry'
// console.log(name,channel);
// var marks=34;
// console.log(marks)
// // color of integer variable and string is different
// /* rule for creating variable
// 1. cannot start with numbers
// 2. can start with letter, numbers, _, $
// 3. are case sentitive */




// var city ='delhi';
// console.log(city);

// const ownersname='hariram';
// console.log(ownersname);

// //const fruits;

// // let has block level scope

// {
//     let city="rampur";
// console.log(city);
// city="kolkata";
// console.log(city);
// }
// console.log(city);



// const arr1=[12,23,14,53,3];
// arr1.push(45);
// console.log(arr1);
// you can't redeclare const but yo can make changes like add to const


/* most common programming case type

1. camelCase
2. kabab-case
3. snake_case
4. PascalCase   */


/*
1. primitive data type- stack-> string,
 number,
 boolean=b true and false
 , null= nothing
 ,undefined= initial value
 , symbol
2. reference data type- heap-> arrays, objects, literals, functions, dates
*/


// OPERATORS IN JAVASCRIPT
// Arithmetic operators
var a=5;
var b=4;
// console.log('the value of a+b is',a+b);
// console.log('the value of a-b is',a-b);
// console.log('the value of a*b is',a*b);
// console.log('the value of a/b is',a/b);

// Assignment operators
var c=a;
// console.log(c);

// c+=2;console.log(c); //c=c+2
// c-=2;console.log(c); //c=c-2
// c*=2;console.log(c); //c=c*2
// c/=2;console.log(c); //c=c/2


// comparision operators
// console.log(a==b); // check whether the condition is right or wrong and give the answer in boolean datatype
// console.log(a>=b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a<b);

// logical operators
// console.log(true && true);         and operator
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);         or operator
// console.log(true || false);
// console.log(false || false);

// console.log(!true);                   no operator
// console.log(!false);


//JS Implicit type coersion  conversion of value from one data type to another.
// implicit is done automatically by JavaScript
 var mStr='hello';
 var mNum=5;
// var mSum=mStr+mNum;
// console.log(mSum);
// console.log(typeof(mSum));
//
// console.log('hello'+true);
// console.log(typeof('hello'+true));
//
// console.log(+'2');
// console.log(typeof(+'2'));
// console.log('2');
// console.log(typeof('2'));
//
// var mValue= 2>='2';
// console.log(mValue);
// console.log(typeof(mValue));
//https://dorey.github.io/JavaScript-Equality-Table/

//explicit done by the user

// console.log(typeof(String(mNum)));
// console.log(typeof(String(true)));
// console.log(typeof(String(-98.10)));
// console.log(typeof(String(null)));
// console.log(typeof(String(undefined)));
//
//
// console.log(Number(true),typeof(Number(true)));
// console.log(mStr,typeof(Number(mStr)));
//
// console.log(Boolena(1),typeof(Boolean(1)));
// console.log(Boolena(0),typeof(Boolean(0)));
// console.log(Boolena(mStr),typeof(Boolean(mStr)));
// console.log(Boolena(''),typeof(Boolean('')));



//   Objects    is the collection of key value pairs enclosed in curly brackets.
// var mCars={
//   "p1": "350 kmph",
//   "gallardo": "320 kmph",
//   "veyron":'409 kmph',
//   "agera":'429 kmph'
// }
// var mAgera={
//   name:"Agera",
//   manufacturer:{name:"koenigsegg",
//   location:"Sweden"
// },
// topspeed:429,
// colr:"black",
// applyBrakes: function(){
//   setTimeout(function(){
//     console.log('car stopped');},5000)
// }
// }
// console.log(mAgera.name);
// console.log(mAgera.manufacturer);
// console.log(mAgera.applyBrakes());


// FUNCTIONS
// DRY= do not repeat yourself
// function functionName(parameter1,parameter2){
//   block of code
// return
// }


// function avg(a,b=5){
//     return (a+b)/2;
// }
//
// c1=avg(3,6);
// c2= avg(c1,4.5);
// // console.log(c1 +"\n"+c2);
//


// Hoistings in JavaScript
// this mechanism where variables and function can be used before declaring them is called Hoisting in Javascript
// the variable and function declaration are moved to the top of their scope before code execution.
// javascript has twp steps in executing a particular script
// step 1: creation
// step2: execution

// xt="some-string";
// console.log(xt);
// var xt;

// function Hoisting
// console.log(avg(1,5));
// function avg(a,b=5){
//     return (a+b)/2;
// }
// sum(90,8);
// var sum=function(num1,num2){          // acted as a assignment so hoisting didn't work
//   console.log(num1+num2);
// }
// sum(90,8);







// Conditionals in JavaScript
age=34;


// if , if else, if else if , if if else
// if(age>18){
//     console.log("You can drink");
// }
// else{
//     console.log("You cannot drink") ;
// }

// if(age>18){
//     console.log("You graduated");
// }
// else if(age>26){
//     console.log("You married") ;
// }
// else if(age>28){
//     console.log("You got kid") ;
// }
// else if(age>70){
//     console.log("You die") ;
// }




// LOOPS
// for loop
var arr=[1,2,3,4,5,6];
var i;
// for(i=0;i<=5;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// while loop
i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }


// do while LOOP
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length);



// continue and break
// for(i=0;i<=5;i++){
//     if(i==2){
//        // break;
//         continue;
//     }
//         console.log(arr[i]);
//     }


// myarr1=[1,2,3,null,true,"hello"];
// //ARRAY METHODS
// myarr1.length;
// console.log(myarr1.length);
// console.log(myarr1);
// myarr1.pop();
// console.log(myarr1);
//
// myarr1.push("om");
// console.log(myarr1);
//
// myarr1.shift();
// console.log(myarr1);
//
// myarr1.unshift("ranu");
// console.log(myarr1);
//
// console.log(myarr1.unshift("ranu"));
// console.log(myarr1);
//
// myarr1.sort();
// console.log(myarr1);





// DATES
let myDate =new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
// console.log(myDate.getDay());
// console.log(myDate.getHours());



// DOM MANIPULATION
// Document Object model// when a web page is loaded, the browser creates a OM of the page .
//It is the tree representation of the HTML document. This DOM tree can be modified with JS

// Js can add new HTML elements and attribute
// can change HTML elements and attributes in the pages
// Javascript can change all css styles in the pages
// can remove existing HTML elements and getAttributes
// can add and listen to HTML events like onClick, onScroll etc.


// selecting html elements
document.getElementById("id_name")  // it will return the id and all the elements inside the id
document.getElementsByClassName("blog-card")  // will return the class and its element
// will return null, if the id is not present
document.getElementsByTagName("tag_name eg img")

// js query query Selector
//query selectors allows you to use css selectors to select HTML elements. It is the new way in JS to select HTML elements
// 2 selectors querySelector('#id_name') // it selects the first item it find
// querySelectorAll() selcts all the item it finds
 console.log(document.querySelectorAll('.blog-card img'))
 // getElementById is more than 2 times faster than query selectors.


 // UPDATE HTML CONTENT using JS
// use countdown project


// UPDATE STYLES OF HTML elements
// we can update the css style of the html element using js
// syntax:   var selEle=getElementById(' selector')/ querySelector('selector')
// selEle.style.{propertyName}=Value;
// eg:    selEle.stle.width='300px';
// example in countdown 2nd part



// INTRO TO EVENTS
// when some action happens in the webpage then it is an event
// the clicking of mouse, hovering of mouse,pressing key of keyboard,
// resizing the browser window, webpage finish loading, form submitted,
// video paused or finish playing
//
// two ways to handle EVENTS
// method1: selectedElement.{eventProperty}=function(){}
// selectedElement.onclick=function(){}
// method2: selectedElement.addEventListener({eventName}, function(){})
// selectedElement.addEventListener('click', function(){})

// go to clickme for practical implementation


document.getElementById('click').click();
let element=document.getElementById('click');
// console.log(element);
let el=document.getElementsByClassName("container");
// console.log(el);
//el[0].style.background="yellow";
el[0].classList.add("bg-primary"); // added the class
el[0].classList.add("text-success");
// el[0].classList.remove("text-success"); removed the class
// el[0].innerHTML;
//el[0].innerText;
// console.log(element.innerHTML);
// console.log(element.innerText);
// console.log(el[0].innerHTML);
// console.log(el[0].innerText);


// tn= document.getElementsByTagName('button');
// console.log(tn);
// td= document.getElementsByTagName('div');
// console.log(td);
// createdElement = document.createElement('p');
// createdElement.innerText= 'Thus is created by append in DOM';
// td[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText= 'Thus is bold';
// td[0].replaceChild(createdElement2, createdElement);
// // removeChild(element);
// document.URL;
// document.title;
// document.scripts;
// document.links;
// document.forms;
// document.images;
// document.domain;



// SELECTING USING QUERY
// q= document.querySelector('.container');
// console.log(q);
// q2= document.querySelectorAll('.container');
// console.log(q2);


// JAVASCRIPT EVENTS
//

// get element styles values
//inline styles : selectedElement.style.{inlinestyleproperty};
// css file: window.getComputedStyle(selectedElement).{stylepropertyname}

// var btnIncreasefont=document.getElementsByClassName("blog-heading");
// // console.log(btnIncreasefont.style)
//
//  console.log(window.getComputedStyle(btnIncreasefont).marginRight)


//form EVENTS
// change: the change event is triggered when the content of an input field is changed or when user selects a value from the dropdown etc.
// focus: the focus event is triggered when the inpt field is focused by mouseover
// blur: when input field loses focused
// submit: when submit button is clicked by user.

function clicked(){
//      console.log('The button was clicked');
  }
// window.onload = function(){
//     console.log('The webpage is loaded');
// }

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//     console.log('click hua');

// })

// firstcontainer.addEventListener('mouseover',function(){
//     console.log('mouse on conatianer');
// })

// firstcontainer.addEventListener('mouseout',function(){
//     console.log('mouse out container');
// })



// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log('mouse up container');
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//     console.log('mouse down container');
// })



// ADD/REMOVE CLASSES USING JS
// the modern browser give us access to a property called class list. the class list holds all the classes of an html elements
// selectedElement.classList.add('Myclass');


// arrow functions
// function sum(a,b){
//     return a+b;
// }
// // sum function can be writeen as
// sum=(a,b)=>{
//     return a+b;
// }
//  setTimeout and setInterval
logkaro = ()=>{
  //  console.log("i am your log!!");
    document.querySelectorAll('.container')[1].innerHTML="<b>set timeout fired</b>";
}
// setTimeout(logkaro,2000);
// clr=setInterval(logkaro,2000);
// console.log(clr);
//  // use clearInterval(clr) to stop setInterval

// JAVASCRIPT LOCAL Storage
// localStorage.setItem('name','harry');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('');
// localStorage.clear();


// JSON
// obj= {name:'hary',length:3};
// jso= JSON.stringify(obj);
// console.log(jso);
// typeof obj;
// typeof jso;
// par= JSON.parse(`{"name":"hary", "length":3}`);
// console.log(par);



//https://cdn2.vectorstock.com/i/1000x1000/42/26/background-with-night-city-and-blurs-vector-11944226.jpg
