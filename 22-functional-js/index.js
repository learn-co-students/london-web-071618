console.log('I am running!')
console.log('Some more code!')

// FIRST-CLASS FUNCTIONS
// Functions are objects in JS
function greet() {
  console.log('Hey there!')
}

greet.stuff = ['This', 'is', 'nice!']

// CALLBACKS
arr = [1,2,3,4]

function addTen(number) {
	return number + 10
}

arr.map(addTen()) // WRONG
arr.map(addTen) // COOL!


// Creating our own map!
function map(arr, func) {
	const newArr = []
	for (const item of arr) {
		const newItem = func(item)
		newArr.push(newItem)
	}
	return newArr
}

map([10,20,30], (number) => number * number)
// [100, 400, 900]
[10,20,30].map((number) => number * number)
// [100, 400, 900]

// filtering
const gt2 = number => number > 2 
arr.filter(gt2)

// SCOPE
// Part 1
function scope1() {
	const stuff = 'thing1'
	return stuff
}

function scope2() {
	const stuff = 'thing2'
	return stuff
}

console.log(scope1())
// "thing1"
console.log(scope2())
// "thing2"

// Part 2
function makeCounter() {
	let counter = 0
	const up = () => counter++
	const down = () => counter--
	const getCounter = () => counter

	return {
		up: up,
		down: down,
		getCounter: getCounter
	}
}

// IMPERATIVE VS DECLARATIVE
// Imperative
const button1 = document.createElement('button')
const button2 = document.createElement('button')

button1.innerText = 'Save'
button2.innerText = 'Load'

document.body.appendChild(button1)
document.body.appendChild(button2)

// Declarative
ui(
  { view:"button", value:"Save"},
  { view:"button", value:"Load"}
)

// Pure functions - Mutating state
const arr = []
const addToArray1 = array => {
	array.push(1)
	return array
}

const addToArray2 = array => {
	const newArray = [...array]
	newArray.push(1)
	return newArray
}

// HIGHER-ORDER FUNCTIONS
// They either:
//   - Take functions
//   - Return a function

// Partial application
function getProperty(key) {
	return function (obj) {
		return obj[key]
	}
}

const getPropertie = key => obj =>
  obj[key]

const withPrefixAndSuffix = prefix => suffix => word =>
  `${prefix}${word}${suffix}`
  
// RECURSION
// A function that calls itself
const countdown = n => {
    if (n === 0) {
      console.log('Done!')	
    } else {
      console.log(n)
      countdown(n - 1)
      }
}
