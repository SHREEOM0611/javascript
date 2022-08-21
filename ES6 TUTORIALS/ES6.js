// ecmaScript 2015
// features of ES6
// variable creation using let and const
// template string
// arrow function
// rest and spread operators
// destructuring
// array function: find() and findIndex()
// Classes
// Promises
// and much more
// it may not support in all browser then what to do?
// BABEL:  It is a preprocessor for JS/ES .
// it is mainly used to convert ES6+ code into a backwards compatible version of JS that can be run by older browsers.
// open browser -> babel-> 1st link-> try it out-> write code on left hand side and it ill convert it to older versions.
// codepen-> js-> preprocessor->BABEL

// Creating variables
// it introduces new way to create variables

 // let : it is the replacement for var // hoisting is not possible in let
 // eg let mName="John"

 //const: it is used to create variables with constant values also known as constants. the variable created using cost cannot be updated later in the code.
 //for example :   const api_url="http://api.test.com/v1";


 // TEMPLATE STRING: it is the string which allows embedding expressions inside it.
 to create template string yoy don't use single or double quotes, you use back tick.
 the expressions are embedded by wrapping them inside ${}

 eg: const mGreetings='hello${name}'; // name variable is called
 const moreGreeting= 'hello ${fullNmae()}'; // function is called

 // rgba(red,green,blue,alpha)
  const rgbaExp='rgba('+ red +','+ green + ','+blue+','+alpha+')';
  const rgba='rgba( ${red},${green} ,${blue} ,${alpha})';



  // ARROW FUNCTIONS
  // ES6 gives us the new suyntax for defining functions using fat arrow.
  // arrow function bring a lot of clarity & code reduction.
  // => fat arrow

  function greeting(name){

  }

  const greeting=(name)=>{

  }


  // REST OPERATOR

const mSum=(num1,num2)=>
{ console.log(args);
  let sum=0;
  for(let i=0; i<args.length;i++)
  sum=sum+args[i];

  console.log(sum);
}
mSum(1,2,3,4,5);


const mSum=(num1,num2...args)=>{ console.log(args);
  let sum=0;
  for(let i=0; i<args.length;i++)
  sum=sum+args[i];

  console.log(sum);
}
mSum(1,2,3,4,5); // 1st two numbr is passed as num1 and num2 and others passed as array in args


//SPREAD operators
// spread allows arrays and objects to be expanded into:
// elements in case of array.
// key value pair in case of object

let mArray1=[1,2,3,4,5];
let mArray2=[...mArray1];
let mArray3=[6,7,8]

mArray1.push(6);
console.log(mArray1);   // changes in mArray1 will not affect changes in mArray2
console.log([...mArray1]);
console.log(mArray2);

let mArray10= mArray1.concat(mArray3); // concatenation
let mArray10=[...mArray1,...mArray3];


destructuring
it allows us to unpack arrays or objects into a bunch of variables which makes working with arrays and objects a bit more convenient.

let [a,b]=[1,2,3,4,5];
let {name,age}={firstName:'john',lastName:'walker', age:30};

const name=" john manuel lark";
const nameArray = name.split('');
console.log(nameArray);
let firstName= nameArray[0];
let middleName=nameArray[1];
let lastName=nameArray[2];

let [firstName,middleName]=nameArray;
let [firstName, ,lastName]=nameArray;


// in objects the variable name should be same as  object key name




// ARRAY FUNCTION: MAPS
// it iterates the array for us and we can pass a callback function to perform some operation on the each array itemn.
// the updated values can be returned by the callback function to create a new array


arr.map((item)=>{
  // callback function
})

let newArr=[];
const mArr=[1,2,3,4,5];
//
// const doubleValues=(item=>{
//   return item*2
// })
// for(let i=0;i<mArr.length;i++){
//   newArr.push(doubleValues(mArr[i]))
// //  newArr.push(mArr[i]*2)
// }


let newArr=mArr.map(()=>{
  return item*2;
})  // goes to 1st element does the job then goes to 2nd and so on
// item means current element in iteration


let newArr=mArr.map((item,i)=>{
  console.log('item at pos: ${i}  is ${item}')
})
// return will push the return value to newArr


const x=[{
  name:'john lark',
  experience:10,
  type:'commercial'
},{
  name:'john doe',
  experience:8,
  type:'private'
},{
  name:'john weigh',
  experience:5,
  type:'commercial'
}];

let newArr=mArr.map((data,i)=>{
  console.log(data);
  return{ name: data.name, experience:data.experience}
})



// reduce function
// reduce also iterates through entoire array and it acceppts the callback function to perform some action on array element.
// the difference here is that reduce() passes the result of callback from one iteration to next one.
// this callback result is called accumulator
// the accumulator can be pretty much anything(integer,string,object,array) and must be instantiated and passed when calling reduce()

arr.reduce((acc,item)=>{
  // callbackfunctiom
},acc_default_value)

const numArr=[1,2,3,4,5];  // passes item which is being iterated
const result=numArr.reduce((acc,item)=>{
  console.log(item);
  console.log(acc);
  return acc+item;
},0)
console.log(result);



// filter

// it iterates through the array to create a new array.
// you can decide whuch elements should be added in the new arrag based on some condition

arr.filter(item=>{
  // return true/false to add/skip the current item
})

const numArr=[1,2,3,4,5,6,7];

const resultArr=numArr.filter((item)=>{
  console.log(item)
  // return true; // all the items added to result arrays
  // return false; // no item is added to result

  return item%2===0;
})
console.log(resultArr)


const pilot=[{
  name:'john lark',
  experience:10,
  type:'commercial'
},{
  name:'john doe',
  experience:8,
  type:'private'
},{
  name:'john weigh',
  experience:5,
  type:'commercial'
}];

arr.filter(item=>{
  // return true/false to add/skip the current item
  if(item.experience>5)
  return true;
  else return false;
})


// find() and findIndex()
// find(): is used to search for an element in the array that matches some condition.
// it returns the first element that matches the condition
//
// findIndex(): quite similar to find method/
// findIndex() method returns the index of the element instead of element itself
//


const numArr=[-1,-2,-3,-4,-5,-6,4,2,1];
const result = numArr.find(item=>{
  console.log(item);
//  return true;
  return (item%2===0 && item>=0);
})
