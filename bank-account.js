
export default class BankAccount {
    constructor(amount) {
        this.saldo = 250000;
        this.amount = amount;
    }

    deposit(amount) {
        this.saldo = this.saldo + +amount;
        return ("Saldo saat ini " + this.saldo);
    }

    withdraw(amount) {
        this.saldo = this.saldo - amount;
        return ("Saldo saat ini " + this.saldo);
    }
}

