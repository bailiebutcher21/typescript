import { InterfaceTransaction} from "../InterfaceFile";
import { Transaction } from "../Transaction";

export class Transaction implements InterfaceTransaction {
        success: boolean;
        amount: number;
        resultBalance:number;
        transactionDate: Date;
        description: string;
        errorMessages:string;

}