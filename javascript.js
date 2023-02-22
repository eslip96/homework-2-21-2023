const str = "We can't stop here, this is bat country!";

console.log(str.startsWith("W"));
console.log(str.endsWith("!"));

const stringOne = "The dog meows";
const replacedString = stringOne.replaceAll("dog", "cat");
console.log(replacedString);

const stringTwo = "The cow jumped over the moon";
const indexOfOver = stringTwo.indexOf("over");
console.log(indexOfOver);

const stringThree = "Never gonna give you up never gonna let you down";
const lastIndex = stringThree.lastIndexOf("r");
console.log(lastIndex);

let one = 5 + 10;
console.log(5 + 10);

let two = 90 / 3;
console.log(90 / 3);

let three = 50 - 25;
console.log(50 - 25);

let four = 20 * 5;
console.log(20 * 5);

const firstName = "ryan";
const lastName = "curtis";

console.log(
  firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.charAt(0).toUpperCase() +
    "."
);
