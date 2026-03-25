

// var arr=["abhi",45,"jay", true,"priya"]

// var school_frnd=["aman","jay","riya"]
// var college=["sourabh","nimish"]

// console.log(arr[0].toUpperCase())
// upadte the array element
// arr[0]="abhishek"

// for(var i=0;i<arr.length;i++){
//     // console.log(arr[i].charAt(0).toUpperCase() + arr[i].substring(1,arr[i].length))
//   arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].substring(1,arr[i].length)
// }

// console.log(arr)
// // var num=[45,74,10,25,63];

// console.log(arr.toString())
// console.log(arr.at(2))
// console.log(school_frnd.join(" "))
// console.log(school_frnd.pop())
// school_frnd.push("priya")
// school_frnd.shift()
// school_frnd.unshift("hello")
// console.log(school_frnd)





// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)


// The copyWithin() method in JavaScript is used to copy part of an array to another location in the same array.

// 👉 Important:

// It modifies the original array (no new array is created)

// It does not change the array length

// 🔹 Syntax
// array.copyWithin(target, start, end)
// Parameters:

// target → index where copied elements will go

// start → index to start copying from

// end (optional) → index to stop copying (not included)

// 🔸 Example 1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits);
// 👉 Step-by-step:

// Start copying from index 0 → ["Banana", "Orange", ...]

// Paste starting at index 2

// 🔹 Result:
// ["Banana", "Orange", "Banana", "Orange"]

// 👉 Explanation:

// "Banana" → goes to index 2

// "Orange" → goes to index 3

// It overwrites existing values

// 🔸 Example 2
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);
// console.log(fruits);
// 👉 Step-by-step:

// Copy from index 0 to 2 (NOT including 2)
// → ["Banana", "Orange"]

// Paste starting at index 2

// 🔹 Result:
// ["Banana", "Orange", "Banana", "Orange", "Kiwi"]







// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(3, 2, "Lemon", "Kiwi");
// // console.log(fruits)

// // The first parameter (2) defines the position where new elements should be added (spliced in).

// // The second parameter (0) defines how many elements should be removed.

// // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


// // console.log(fruits.indexOf("Apple"))
// console.log(fruits.includes("kiiw"))


var arr=[12,232,123,12,23];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

arr.forEach(function(element,index){
    console.log(element,index)
})