import { Moment } from 'moment';

export interface ICollectionTracking {
  id?: number;
  employeeID?: string;
  unitID?: string;
  employeeName?: string;
  businessProposal?: string;
  subProposal?: string;
  mobileNo?: string;
  relationId?: string;
  accountNo?: string;
  accountTitle?: string;
  noOfVisits?: number;
  osAmount?: number;
  osProfit?: number;
  odDays?: string;
  loanOfficer?: string;
  visitedBy?: string;
  pptDate?: Moment;
  remakrs?: string;
  extraColumnOne?: string;
  extraColumnTwo?: string;
  extraColumnThree?: string;
  extraColumnFour?: string;
  extraColumnFive?: string;
}

export class CollectionTracking implements ICollectionTracking {
  constructor(
    public id?: number,
    public employeeID?: string,
    public unitID?: string,
    public employeeName?: string,
    public businessProposal?: string,
    public subProposal?: string,
    public mobileNo?: string,
    public relationId?: string,
    public accountNo?: string,
    public accountTitle?: string,
    public noOfVisits?: number,
    public osAmount?: number,
    public osProfit?: number,
    public odDays?: string,
    public loanOfficer?: string,
    public visitedBy?: string,
    public pptDate?: Moment,
    public remakrs?: string,
    public extraColumnOne?: string,
    public extraColumnTwo?: string,
    public extraColumnThree?: string,
    public extraColumnFour?: string,
    public extraColumnFive?: string
  ) {}
}
