import { Product } from "./Products";
import { UserData } from "./UserData";

export interface Order {
  quantity?: number;
  products?: Product[];
  userData?: UserData;
  paymentMethod?: string;
  orderValue?: string;
}
