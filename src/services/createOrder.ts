import axios from "axios";
import { Order } from "../interfaces/Order";

export const createOrder = async (orderData: Order) => {
  const res = await axios.post(`${import.meta.env.API_URL}/orders`, {
    ...orderData,
  });
  return res.data;
};
