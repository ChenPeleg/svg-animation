let bankBalance = 0;

function bankAction(action, sum) {

    if (action == 'deposit') {
        bankBalance += sum
    }

    if (action == 'withdraw') {
        bankBalance -= sum
    }
    return "Your balance is " + bankBalance + "$"
}
// console.log(bankAction('deposit', 200)) // Your balance is 200$
// console.log(bankAction('withdraw', 50)) // Your balance is 150$
bankBalance = bankBalance - 100000
// console.log(bankAction('withdraw', 0))