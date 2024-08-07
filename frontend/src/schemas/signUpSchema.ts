import { z } from "zod";

// Existing username validation
export const usernameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must contain only letters, numbers, and underscores");

// Updated signUpSchema with role
export const signUpSchema = z.object({
    name: usernameValidation,
    email: z.string().email("Invalid email address"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"),
    role: z.enum(["doctor", "patient"]),
});
