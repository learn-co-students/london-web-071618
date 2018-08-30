console.log('Welcome to Callbacks!')

// Functions are ACTIONS that can take MANY inputs and return a SINGLE output

function things() {
	return 'a', 'b' // << This won't work
}

function things() {
	return ['a', 'b'] // << But you can definitely do this
}

// Function composition
// You can use a function's output as another's function's input
sum = (a, b) => a + b

// Long way
const a = sum(1, 1)
const b = sum(2, 2)
const c = sum(a, b)
// 6

// Short way
sum(sum(1, 1), sum(2, 2))
// 6

// Note: One is not always better than the other.
// The aim is for your code to be easy to read by others, including your future self.

// Creating objects with functions
function createObject(key, value) {
	return {
		[key]: value
	}
}

createObject('name', 'Nicolas')
// { name: "Nicolas" }

// We can assign the return value to a variable
obj = createObject('name', 'Nicolas')

obj.hasOwnProperty('age')
// false
obj.hasOwnProperty('name')
// true

// Or just use the function's return value directly
createObject('name', 'Nicolas').hasOwnProperty('age')
// false
createObject('name', 'Nicolas').hasOwnProperty('name')
// true

// Method chaining
// If we know what that a function returns a specific type of object,
// We can keep calling methods on that return value
const arr = [10,20,30,40]
const doubleIt = n => n * 2 // An arrow function that doubles whatever number gets passed

arr.map(doubleIt)
// [20, 40, 60, 80]

// This works because map returns a new array, so we can keep mapping over it
arr.map(doubleIt)
	.map(doubleIt)
	.map(doubleIt)
	.map(doubleIt)
// [160, 320, 480, 640]

// First-class functions means we can treat functions as regular objects!
// That means we can pass them around, use them as an argument to a function
// And even return a function from another function

// To prove that, here's our very own Map function!
function map(arr, func) {
	const newArr = []
	for (const item of arr) {
		const newItem = func(item)
		newArr.push(newItem)
	}
	return newArr
}

