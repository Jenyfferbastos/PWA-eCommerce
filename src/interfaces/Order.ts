import { Product } from "./Products";
import { UserAddress } from "./UserAddress";

export interface Order {
  quantity?: number;
  products?: Product[];
  userAddress?: UserAddress;
  paymentMethod?: string;
  orderValue?: string;
}
