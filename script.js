// Task nr.1
var petArray = ["cat", "cow", "dog"];

// Task nr.2
console.log(petArray[1]);

// Task nr. 3
petArray.push("sheep");

// Task nr. 4
console.log(petArray.length);

// Task nr. 5
var catObject = {
  name: "Whiskers",
  color: "grey",
  age: 2,
};

// Task nr. 6
console.log(catObject.age);

// Task nr. 7
var catArray = [
  {
    name: "Whiskers",
    color: "Grey",
    age: 2,
  },
];

// Task nr. 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i].name);
  console.log(catArray[i].color);
  console.log(catArray[i].age);
}

// Task nr. 9
function logToConsole(animal) {
  console.log(animal);
}
// Task nr. 10
logToConsole("donkey");
