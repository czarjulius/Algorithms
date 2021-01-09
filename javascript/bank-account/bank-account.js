//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountOpen = false
    this.accountBalance = 0
  }

  open() {
    if (this.accountOpen) {
      throw new ValueError
    } else {
      
      this.accountOpen = true
      this.accountBalance = 0
    }
  }

  close() {
    if (!this.accountOpen) {
      throw new ValueError
    } else {
      
      this.accountOpen = false
      this.accountBalance = 0
    }
  }

  deposit(amount) {
    if (amount < 0 || !this.accountOpen) {
      throw new ValueError
    } else {
      
      return this.accountBalance += amount
    }
  }

  withdraw(amount) {
    if (amount > this.accountBalance || amount < 0) {
      throw new ValueError
    } else {
      
      return this.accountBalance -= amount
    }
  }

  get balance() {
    if (!this.accountOpen) {
      throw new ValueError
    } else {
      
      return this.accountBalance
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
