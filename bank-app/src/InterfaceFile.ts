import { AccountType } from "./AccountType";
import { TransactionOrigin } from "./TransactionOrigin";

export interface InterfaceAccount {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: InterfaceTransaction[];
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): InterfaceTransaction;
    depositMoney(amount: number, description: string): InterfaceTransaction;
    advanceDate(numberOfDays: number): number;

}

export interface InterfaceTransaction {
    success: boolean;
    amount: number;
    /* resultBalance will be unchanged from the previous balance when success is false.*/
    resultBalance: number;
    transactionDate: Date;
    description: string;
    /* errorMessage will be an empty string when success is true:*/
    errorMessage: string;
}