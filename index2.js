/* ------------- 6.String methods -------*/ 

let str = 'hi there hello hope u r doing good'

//1. includes() - method determines whether a strin contains characcters of a specified string
let check  = str.includes('hello')
console.log(check)

// 2. indexof() - returns the position of the first occurence of a sepecified value of a string
let index = str.indexOf('hope')
console.log(index)

// 3.startswith() - determines whether a string begins with the char of a sepecified strng
console.log(str.startsWith('hello'))
console.log(str.startsWith('hi'))

// 4. slice() - extraacts the string into a parts and returns in new sstring
let newStr = str.slice(0,5)
console.log(newStr)

// 5. to lowercase(), uppercase() - converts string to lower case,uppercase letters
let t = 'happy birthday'
console.log(t.toLowerCase())
console.log(t.toUpperCase())

// 6.trim() - remomves whitespace from the strng
let text = '       irfaan      '
console.log(text.trim())

/* -------- 7.object / json operations ---------*/
let obj = {
    name :'irfan',
    age : 25,
    con : 44651684
}
//objects.keys() - shows the keys 
console.log(Object.keys(obj))

//objects.values() - shows the values
console.log(Object.values)

// JSON.stringify() - method converts a JavaScript value to a JSON string
let strjs = JSON.stringify(obj)
console.log(strjs)

//json.parse() - method parses a JSON string, constructing the JavaScript value or object described by the string.
console.log(JSON.parse(strjs))

/*--------------- 8.Array methods --------------*/
let arr = [2,3,5,7,9,10]
// 1. map() - loop over the array and return new array based on the value return.
//syntax 
// arr.methodName(function(currentItem, index, actualArray)){

//}
let newArray = arr.map(function(currentItem,index,array){
    console.log(`curent item is ${currentItem} index is ${index} array is ${array}`)
    return currentItem*2
})
console.log(arr)
console.log(newArray)

// 2. filter() - return new array with the elements that satisfy the condition.
let filteredValues = arr.filter(function(currentItem,index,array){
    return currentItem>5
})
console.log(filteredValues)

// 3. every() - returns true or false if every element int he array satisfys.
let ageL = [25,30,33,35,40]
let isAlladult = ageL.every(function(currentItem,index,array){
    return currentItem >= 20 || currentItem == 30
})
console.log(isAlladult)

// 4. some() - returns true if atleast one element in array satify.
let ageList = [25,30,33,35,40]
let isAdult = ageList.some(function(currentItem,index,array){
    return currentItem >30
})
console.log(isAdult)

// 5. sort() - sort the elements in na array
var names = ['meow', 'chand','ramesh','dinesh']
console.log(names.sort())

//sorting of a number
let nuumbers = [85,23,65,45,33]
let sortedList = nuumbers.sort(function(a,b){
    return b-a 
})
console.log(sortedList)

// 6. reduce() - reduces the array to a single value (left -right)
//syntaax
// array.reduce(function(total, currentvalue, index, array){

//}, intialvalue)

let nums = [15,65,14,22]
let numsList = nums.reduce(function(total,currentItem){
    return total+ currentItem
},0)
console.log(numsList)

// 7. forEach() - this method calls for each element 
nums.forEach(function(currentItem){
    console.log(currentItem)
})

/* ------------ 9. Promises ------------------*/
// Promise is an object that may produce a single value sometime in the future, promises are used to handle asychronous operation in javascript
function checkIsSuccess (data){
    return new Promise(function(resolve,reject){
        if(data === 'success'){
            return resolve('successfully exceuted')
        }
        else{
            return reject('unsuccessfully executed')
        }
    })
}
checkIsSuccess('').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

/*---------------- 10.query selectors -------------------*/
//document.querySelector() - returns the first element that matches a css selectors
//document.queryselectorAll() - returns all elements in the document that mathces a specified selector 

let element = document.querySelector('div')
console.log(element)

let elements = document.querySelectorAll('div')
console.log(elements)


/* ------------- 11. events ------------------------------*/
//Events- is an action that occurs in the web browser, which the web browser feedbacks to u that responds to it
// 2 common events - html event handler attribute  when we add event through html,event always begin with ON keyword like onclick, onchange, onkeyup
// event listener - provides 2 main methods like addEventListener - register an event handler, removeEventListener() - remove an event listener
/*function firstFunction(){
    console.log('hurray')
}
//if we want do iit prormatically
let btn = document.querySelector('button')
btn.addEventListener('click',firstFunction)

document.addEventListener('mousemove',handler)
function handler(){
    document.querySelector('.demo').innerHTML = Math.random()
}
function removeHandler(){
    document.removeEventListener('mousemove',handler)
}

document.addEventListener( 'hello',function(data){
    console.log('hello has called' + data.detail)
})

function callCustomerMethod(){
    let event = new CustomEvent('hello',{
        detail : {name :'nikhil'}
    })
    document.dispatchEvent(event)
}*/


/**-------------------------12.arrow function ---------------- 
function sum(){
    console.log('hello')
}
abcde()*/
//instead can write short syntax
const abc = ()=> console.log('hello')
abcde()