import { request } from "@/shared/api/axios";
import type { User } from "../model/auth-types";

export async function loginWithEmailAndPassword(data: {
  email: string;
  password: string;
}): Promise<{
  token: string;
  user: User;
}> {
  return await request.post("/auth/login/", data);
}
