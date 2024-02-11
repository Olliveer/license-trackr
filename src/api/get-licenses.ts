import { api } from "@/lib/axios";

export async function getLicenses() {
  const response = await api.get("/licenses");

  return response.data;
}
