let accountBalance = 1000; 

function atm(withdrawAmount) {
    if (withdrawAmount > accountBalance) {
        return "Not enough money";
    } else {
        accountBalance -= withdrawAmount;
        return `You withdrew $${withdrawAmount}. Money left: $${accountBalance}`;
    }
}

let request = prompt("How much do you want to withdraw?");
console.log(atm(Number(request)));

