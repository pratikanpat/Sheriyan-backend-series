//fundamentals of the Javascript :
// arrays and objects
// functions return
// async js coding 
// foreach map filter find indexOf 

var arr = [1, 2, 3, 4, "hey", {}, true, function () {}];
console.log(arr);

//forEach does not return anything. it just performs the operation on each element of the array.
var newArr = arr.forEach(function (val){
  console.log(val+1);
})
console.log(newArr);

//map create an  new array, which has same no of elements as the original array. and performs the operation on each element and returns the new array.
var mapArr = arr.map(function (val){
  return val+1;
})
console.log(mapArr);

//filter creates a new array with elements that pass the test implemented by the provided function. 

 var fileterArr = arr.filter(function (val){
    if (val <= 3) { return true; }
    else return false
 })
 console.log(fileterArr);

 //find helps to find the values. 
 console.log("find")
 var findArr = arr.find(function (val){
    if (val === 3) return val;
 })
 console.log(findArr);


//object anything inside the curly braces with colon
var obj ={
    name : "Pratik",
    age : 20,
    kuchbhi : "Kuchbhi"
}
Object.freeze(obj) //so you cannot change the values of the object from outside like bellow. 
obj.name = "Diskha";
//to access object elements : obj.name OR obj['name']




//async and await - synchronous and asychronous code. 
async function abcd(){
    await fetch('https://randomuser.me/api')
} 