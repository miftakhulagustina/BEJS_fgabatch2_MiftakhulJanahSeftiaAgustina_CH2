import BankAccount from './bank-account.js';

function tampilSaldoDeposit(amount) {
    console.log("Transaksi sedang diproses ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(amount) && amount >= 0) {
                resolve(bank.deposit(amount));
            } else {
                reject("Inputan tidak sesuai!");
            }
        }, 5000);
    })
}


function tampilSaldoWithdraw(amount) {
    console.log("Transaksi sedang diproses ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(amount) && amount <= bank.saldo && amount >= 0) {
                resolve(bank.withdraw(amount));
            }
            else if (amount > bank.saldo) {
                reject("Saldo tidak mencukupi untuk melakukan transaksi");
            } else {
                reject("Inputan tidak sesuai!");
            }
        }, 5000);
    })
}

function tampilSaldo() {
    let pilih = window.prompt("Silahkan pilih transaksi! \n 1. tambah saldo \n 2. kurangi saldo");
    if (pilih == 1) {
        let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + bank.saldo);
        tampilSaldoDeposit(amount)
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject))
    } else if (pilih == 2) {
        let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + bank.saldo);
        tampilSaldoWithdraw(amount)
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject))
    } else {
        alert("Input tidak sesuai! \nSilahkan input (1) untuk menambah saldo atau (2) untuk mengurangi saldo");
    }
}


var amount = 0;
let bank = new BankAccount(amount);
tampilSaldo()
