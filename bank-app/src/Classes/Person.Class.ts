

export class Person {
    public checking = new Checking(this.name, this.dateOfBirth, this.checkingBalance, AccountType.checking);
    public savings = new Savings(this.name, this.dateOfBirth, this.savingsBalance, AccountType.savings);
    public retirement = new Retirement(this.name, this.dateOfBirth, this.retirementBalance, AccountType.retirement);
    constructor(
        public name: string,
        public dateOfBirth: Date,
        public checkingBalance: number,
        public savingsBalance: number,
        public retirementBalance: number) { }

}