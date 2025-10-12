import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const messageSchema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
  message: yup
    .string()
    .min(10, "Please enter a message of at least 10 characters.")
    .required("Please enter your message."),
});
