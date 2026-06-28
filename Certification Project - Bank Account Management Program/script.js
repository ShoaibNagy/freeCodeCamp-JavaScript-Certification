class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(transaction => transaction.type === 'deposit')
      .map(transaction => transaction.amount);
    return `Deposits: ${deposits.join(',')}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(transaction => transaction.type === 'withdraw')
      .map(transaction => transaction.amount);
    return `Withdrawals: ${withdrawals.join(',')}`;
  }
}

// ==========================================
// Instance Creation and Testing
// ==========================================

// Create a new instance of BankAccount
const myAccount = new BankAccount();

// Perform at least 5 transactions (3 deposits, 2 withdrawals) to ensure balance > $100
myAccount.deposit(200);  // Balance: 200
myAccount.withdraw(50);  // Balance: 150
myAccount.deposit(100);  // Balance: 250
myAccount.withdraw(30);  // Balance: 220
myAccount.deposit(50);   // Balance: 270

// Example Usage:
console.log(myAccount.checkBalance()); 
// Output: Current balance: $270

console.log(myAccount.listAllDeposits()); 
// Output: Deposits: 200,100,50

console.log(myAccount.listAllWithdrawals()); 
// Output: Withdrawals: 50,30