import { api } from "@/lib/axios";

interface CreateLicenseProps {
  key: string;
  softwareId: string;
}

export async function createLicense({ key, softwareId }: CreateLicenseProps) {
  const response = await api.post("/licenses", {
    key,
    softwareId,
  });

  return response.data;
}
