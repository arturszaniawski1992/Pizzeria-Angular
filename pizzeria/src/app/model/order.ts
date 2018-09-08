export interface Order {
  id: number;
  dishIds: number[];
  status: string;
  date: Date;
  firstName: string;
  lastName: string;
  town: string;
  street: string;
  number: number;
  mobile: number;
}
