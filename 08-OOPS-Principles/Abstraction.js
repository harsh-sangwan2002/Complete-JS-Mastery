function Bank() {

    // Creating private variable
    let balance = 0;

    this.deposit = function (amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    this.withdraw = function (amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    this.getBalance = function () {
        return balance;
    }
}

var myBank = new Bank();
myBank.deposit(100);
console.log(myBank.getBalance()); // 100