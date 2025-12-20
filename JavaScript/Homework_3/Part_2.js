function calculateDogAge(humanYears) {
const dogYears = humanYears * 7;
return dogYears;
}
console.log("Your dog is " + calculateDogAge(5) + " years old.");

function calculateHumanAge(dogYears) {
const humanYears = dogYears / 7;
return humanYears;
}
console.log("You are " + calculateHumanAge(35) + " years old.");
