import BankAccount from './bank-account.js';

class BankSystem extends BankAccount {
    constructor(amount) {
        super(amount);
    }

    tampilSaldoDeposit(amount) {
        console.log("Transaksi sedang diproses ...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!isNaN(amount) && amount >= 0) {
                    resolve(system.deposit(amount));
                } else {
                    reject("Inputan tidak sesuai!");
                }
            }, 5000);
        })
    }

    tampilSaldoWithdraw(amount) {
        console.log("Transaksi sedang diproses ...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!isNaN(amount) && amount <= system.saldo && amount >= 0) {
                    resolve(system.withdraw(amount));
                }
                else if (amount > system.saldo) {
                    reject("Saldo tidak mencukupi untuk melakukan transaksi");
                } else {
                    reject("Inputan tidak sesuai!");
                }
            }, 5000);
        })
    }
}


function tampilSaldo() {
    let pilih = window.prompt("Silahkan pilih transaksi! \n 1. tambah saldo \n 2. kurangi saldo");
    if (pilih == 1) {
        let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + system.saldo);
        system.tampilSaldoDeposit(amount)
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject))
    } else if (pilih == 2) {
        let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + system.saldo);
        system.tampilSaldoWithdraw(amount)
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject))
    } else {
        alert("Input tidak sesuai! \nSilahkan input (1) untuk menambah saldo atau (2) untuk mengurangi saldo");
    }
}

var amount = 0;
let system = new BankSystem(amount);
tampilSaldo()
