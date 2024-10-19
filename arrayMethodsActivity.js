//Using concat() to joined two arrays
const arr1 = ["Celine", "Lone"];
const arr2 = ["Emil", "Tobias","Linus"];
const joinedtwoArr = arr1.concat(arr2);
console.log(joinedtwoArr);

//Using push() to add element "kiwi" to array fruits
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)

//Use Unshift to add two numbers 4 and 5 to the beginning of the array
const array1 = [1,2,3];
array1.unshift(4,5);
console.log(array1);

//Use pop() remove the last element from the fruits array
fruits.pop();
console.log(fruits);

//Use shift() to remove first element from the array
const array2 = [1,2,3];
array2.shift();
console.log(array2);

//Use sort() to short array alpabetically
fruits.sort();
console.log(fruits);

//Use slice() to create a new array containing a portion of fruits array
const newArray = fruits.slice(1, 3);
console.log(newArray);

//Use splice() to insert and remove elements in the months array
const months = ["January", "March", "April"];
months.splice(1, 0, "February");
console.log(months);


