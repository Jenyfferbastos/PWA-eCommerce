import axios from "axios";

export const listProducts = async () => {
  console.log({ env: import.meta.env.VITE_API_URL });

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
  return res.data;
};
