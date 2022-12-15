import axios from "axios";
import { Product } from "../interfaces/Products";

export const listProducts = async (
  category: string,
  value: string
): Promise<Product[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
    params: { category, value },
  });
  return res.data;
};
