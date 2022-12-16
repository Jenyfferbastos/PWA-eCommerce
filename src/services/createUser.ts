import axios from "axios";
import { User } from "../interfaces/User";

export const createUser = async (user: User) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
    ...user,
  });
  return res.data;
};
