/* -----Javascript concept-----*/
// 1.variables

//var keyword
//it can be updated and also can be re declared
//var keyword an used for under global scope, in function
//not block level scope

//global scope
var nam = 'irfaan';
console.log(nam);

var mynam = 'irfan shaik'
console.log(mynam)

//function scope
function abc(){
    var anothernam = 'shaik'
    console.log(anothernam)
}

abc()
//console.log(anothernam)

//block scope - starts with {}
if (2==2){
    var x = 10
}
console.log(x)  

//let keyword
// it can be updated but cant be redeclared
// let keyword supports both function and block level

let car = 'volvo'
car = ' bmw'
console.log(car)
console.log(window.car)

function xyz(){
    let sys = 'dell'
    console.log(sys)
}
xyz()
//console.log(sys)
//block level - supports within the scope
if (2==2){
    let syst = 'hp'
console.log(syst)
}


//const keyword
//it cant be updated and cant be redeclared

//dont supoort at global scope
const k = 'key'
//k = 'word'
console.log(k)

//supports at function scope
function am(){
    const y = '10'
    console.log(y)
}

am()
const y = 40
console.log(y)

//supports at block scope
if (2==2){
    const z= '30'
    console.log(z)
}
console.log(y)


/*----------------- 2. Data types --------*/
// there are 8 basic data types - number, string, boolean, bigint, undefined, null, symbol - unique idnetifier, object - imp dtype
//rest all types are object in some form :
// array, String,Date,Math,etc,...

//number
var a= 10
console.log(typeof x)

//bigint
var b = 102648n
console.log(typeof b)

//string
var c = 'car'
console.log(typeof c)

//boolean
var d = true
console.log(typeof d)

//undefined
var e 
console.log(typeof e)

//objects
var f ={}
console.log(typeof f)

//array 
var g = []
console.log(typeof g)

//symbol
var sym = Symbol("id")
console.log(typeof sym)

//null - here null execcutes as object - dont displays as null - instead it shows as object its standard in JS
var x1 = 10
x1 = null 
console.log(typeof x1)

/* --- --------- Equality comparisons ---*/
// 1. Normal comparison - only compares value
console.log(3=='3')
console.log(3=='5')
console.log('hi' == 'hi')

// 2. strict comparison - compares value & data type
console.log(3===3)
console.log(3===7)

//Null vs undefined
var res
console.log(res)

var r = null
console.log(r)

console.log(res==r)
console.log(res === r)

/* --------------- 3. spread operator ----*/
// 1. Expanding of string
let greeting = 'hello there'
let charList = [...greeting]
console.log(charList)

//2.combining array
let arr1 = ['amazon','salesforce']
let arr2 = ['ggogle', 'dell']
let arr3 = [...arr1,...arr2]
console.log(arr3)

//3.adding values to an array
let arr4 = ['a','b','c']
let arr5 = ['shaik',...arr4]
console.log(arr5)

//4.combining objects - in objects we have properties
let obj1 = {name:"sk",age:25,date:'25/3/22'}
let obj2 = {name:'md',age:26}
let obj3 = {...obj1,...obj2}
console.log(obj3)

//5.shallow copy - in array we have list of elements
let val1 = ['hi','hey','hello']
let val2 = [...val1,'irfan']
val2.push('shaik')
console.log(val1)
console.log(val2)

//6.nested copy
let arrObj = [
    {name:'shaik'},{name:'irfan'}
]
/*let arrObj1 = [...arrObj]
console.log(arrObj1)
arrObj1.name = 'batman'
console.log(arrObj1)
console.log(arrObj)
*/

//hack for nested copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj))
console.log(arrObj1)
arrObj1.name = 'batman'
console.log(arrObj1)
console.log(arrObj)

/*-------------- 4.Destructuring -----*/
// most used 2 data structures are object and array
// Destructuring is a special syntax allows u to unpack object,array into variables 

//1. Array destructuring
let ar1 = ['amazon','saf']
//let company1 = arr[0]
//let company2 = arr[1]
let [company1,company2] = ar1
console.log(company1)
console.log(company2)

//2.object destructuring
let options = {
            title:'lwc',age:23,type:'shawn'
}
/*var title = options.title
var age = options.age
var type = options.type  // instead of writing code for everyone we can destructure it 
*/
let {title,age,type} = options
console.log(title)
console.log(age)
console.log(type)

/* ------------------- 5.Interpolation----*/
//templte strings using `` back ticks - rather than using single or double quotes

var name = 'shaik i'
var con = 234546
var addr = 'hyderabad'
var details = "my name is" + name + "my number is "+ con + addr
console.log(details)

//instead we can interpolate
console.log (`my name is ${name} my contact is ${con}`)





