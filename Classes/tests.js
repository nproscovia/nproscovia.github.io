"use strict";

describe("Object tests", () => {
    describe(" creating an account", () => {
        it("creating account instance", () => {
            let account = new Account(3456);
            expect(account.toString()).to.eql("Account 3456: balance 0");
        });
    });
})

describe("Operation tests", () => {

    beforeEach(() => {
        this.account = new Account(3456);
    });

    describe("deposit", () => {
        it("depositing money into the account", () => {
            const amount = 2000;
            this.account.deposit(amount);
            expect(this.account.getBalance()).to.eql(amount);
        });
    });

    describe("unsuccessful deposit for invalid amount", () => {
        it("no deposit if the amount is less than 0", () => {
            const amount = -1;
            expect(() => {
                this.account.deposit(amount);
            }).to.throw(RangeError, "Deposit amount has to be greater than zero");
        });
    });

    describe("withdraw", () => {
        it("successful withdraw of money", () => {
            const amount = 1000;
            this.account.deposit(amount);
            this.account.withdraw(500);
            expect(this.account.getBalance()).to.eql(500);
        });
    });


    describe("withdraw failure due to less amount", () => {
        it("no withdraw if balance amount is not enough", () => {
            const amount = 1000;
            expect(() => {
                this.account.withdraw(amount);
            }).to.throw(Error, "Insufficient funds");
        });
    });

    describe("unsuccessful withdraw for invalid amount", () => {
        it("not withdraw  if the amount is less than 0", () => {
            const amount = -1;
            expect(() => {
                this.account.withdraw(amount);
            }).to.throw(RangeError, "Withdraw amount has to be greater than zero");
        });
    });
});

describe('Checking Account Test', () => {
    it(' withdraw failure if overdraft limit is exceeded', () => {
        let checkingAccount = new CheckingAccount(3456, 200);
        expect(() => {
            checkingAccount.withdraw(500);
        }).to.throw(Error, "Overdraft limit exceeded!");
    });
});

describe('Bank Tests', () => {

    let bank;
    beforeEach(() => {
        bank = new Bank()
    });
    describe('Account Actions', () => {

        describe(' adding an Account ', () => {
            describe('Default Account', () => {
                it('adding a default Account', () => {
                    bank.addAccount();
                    expect(bank.getAccounts().length).to.eql(1);
                    expect(bank.getAccounts()[0].getNumber()).to.eql(1);
                });
            });

            describe('Savings Account', () => {
                it('adding  a savings Account', () => {
                    bank.addSavingsAccount(5);
                    expect(bank.getAccounts().length).to.eql(1);
                    expect(bank.getAccounts()[0].getNumber()).to.eql(2);
                    expect(bank.getAccounts()[0].getInterest()).to.eql(5);
                });
            });

            describe('Checking Account', () => {
                it('adding a checking Account', () => {
                    bank.addCheckingAccount(200);
                    expect(bank.getAccounts().length).to.eql(1);
                    expect(bank.getAccounts()[0].getNumber()).to.eql(3);
                    expect(bank.getAccounts()[0].getOverdraftLimit()).to.eql(200);
                });
            });
        });

        describe('Account Closure', () => {
            it('closing a bank account', () => {
                bank.addCheckingAccount(200);
                const accountToClose = bank.getAccounts()[0];
                bank.closeAccount(4);
                expect(bank.getAccounts().length).to.eql(0);
                expect(bank.getAccounts().includes(accountToClose)).to.be.false;
            });
        });
    });


    describe('Account Report', () => {
        it('generating account report fot the bank accounts', () => {
            bank.addSavingsAccount(5);
            bank.addSavingsAccount(10);
            bank.addCheckingAccount(300);

            expect(bank.accountReport()).to.eql("\nSavings Account 5: balance 0" +
                "\nSavings Account 6: balance 0" +
                "\nChecking Account 7: balance 0");
        });
    });

    describe('End Of month test', () => {
        it('generating end of month status', () => {
            bank.addSavingsAccount(5);
            bank.addSavingsAccount(10);
            bank.addCheckingAccount(300);
            console.log(bank.endOfMonth());
            expect(bank.endOfMonth()).to.eql("\nInterest added SavingsAccount 8: balance: 0 interest: 5" +
                "\nInterest added SavingsAccount 9: balance: 0 interest: 10" +
                "\nNo action for Checking account");
        });
    });
});
