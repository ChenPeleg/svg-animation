function outerFunction() {
    let bankBalance = 0;
    function innerBankAction(action, sum) {
        if (action == 'deposit') {
            bankBalance += sum;
        }
        if (action == 'withdraw') {
            bankBalance -= sum
        }
        return "Your balance is " + bankBalance + "$"
    }
    return innerBankAction
}
let bankAction = outerFunction();
console.log(bankAction('deposit', 200)); // Your balance is 200$
console.log(bankAction('withdraw', 50)); // Your balance is 150$
bankBalance = bankBalance - 10000 //  Uncaught ReferenceError: bankBalance is not defined