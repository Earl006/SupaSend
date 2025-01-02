import { User } from "@prisma/client";

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  location: string;
}

export interface LoginInput {
  email: string;
  password: string;
}