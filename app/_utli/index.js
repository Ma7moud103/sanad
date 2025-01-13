import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function tailwindCMergeO(...inputs) {
  return twMerge(clsx(inputs));
}
