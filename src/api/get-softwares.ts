import { api } from "@/lib/axios";

interface Software {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function getSoftwares() {
  const response = await api.get<Software[]>("/softwares");

  return response.data;
}
