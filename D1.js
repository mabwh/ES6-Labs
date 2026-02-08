//1)
let x = 3, y = 4;
console.log("X Before:", x);
console.log("Y Before:", y);

let arr = [y, x];
[x , y] = arr;

console.log("X After:", x);
console.log("Y After:", y);
console.log("\n");

//2) return max value from any array

let getMax = function(...items)
{
    let min = Math.min(...items);
    let max = Math.max(...items);

    console.log("Min: ", min);
    console.log("Max: ", max);

    return [min, max];
};

getMax(...[1,3,5,6,2,7]);
getMax(...[-5,3,2,11]);
console.log("\n");


//3) 
var fruits = ["apple", "strawberry", "banana", "orange", "mango"]; 

let resA = fruits.every((item) => {
    return typeof item == 'string';
})
console.log("All items are string?", resA);


let resB = fruits.some((item) =>
{
    return item.startsWith("a");
});
console.log("Some items start with 'a'?", resB);


let resC = fruits.filter((item) => {
    return item.startsWith("b") || item.startsWith("s");
});
console.log("Filtered array", resC);


let resD = fruits.map((item) => {
    return `I love ${item}`
});
console.log("New array", resD);


resD.forEach((item) => {
    console.log(item)
});
console.log("\n");


//4) 

let oldArr = [-2,-5,3,2,-11,1];
let getPositive = function(arr)
{
    let newArr = arr.filter((item)=>{
        return (item > 0);        
    })
    return newArr;
};

let newArr = getPositive(oldArr);
console.log(newArr);
console.log("\n");


//5)

//reduce(callback, initialValue);

//returns single value from multiple items

//extra parameter -> accumulator -> variable that we compose items into, it takes the intitalValue or the first arr item if initial val not provided

//callackFunc(Accum, item, index, arr) => {}

let numbers = [-2,-5,3,2,-11,1, 20, 5];
let sum = numbers.reduce(
    (accumulator, item) => accumulator + item, 0);
console.log("Sum of items: ", sum);
console.log("\n");

//6)

//fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let initCape = function(arr)
{
    let upperCape = arr.map((item) => 
        {
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
    )
    return upperCape;
}

let capitalized = initCape(fruits);
console.log("capitalized fruits: ", capitalized);
console.log("\n");

//7)
let isLowerCase = function(str)
{
    let lowerd = str.toLowerCase();
    return (lowerd == str);
};

console.log("Is lowercase?: ", isLowerCase("joker"));
console.log("Is lowercase?: ", isLowerCase("RataTata"));
console.log("\n");

//8)

//fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let getFruitStrings = (arr, length) => 
{
    return arr.filter((item) => item.length > length)
}
console.log(getFruitStrings(fruits, 3));
console.log(getFruitStrings(fruits, 5));
console.log("\n");






