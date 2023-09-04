let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess !!");
let attempts = 0;

while (parseInt(guess) !== targetNum) {
    if (guess == 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("too high ! enter low digit");
    } else {
        guess = prompt("too low enter a greater digit");
    }
}

if(guess === 'q'){
   console.log("you quit");
}else{
    console.log(`you took only ${attempts} attempts`)
    console.log("congradulations");
}
