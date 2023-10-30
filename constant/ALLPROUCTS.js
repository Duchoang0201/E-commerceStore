import { axiosClient } from "@/libraries/axiosClient";

export async function getAllData() {
  const { data } = await axiosClient.get("/products");
  return data;
}
