import { Plan } from "./plan";

export interface Insurance {

    insuranceId : number;
    insuranceName : string;
    insType :string;

    plan:Plan;
    

}
