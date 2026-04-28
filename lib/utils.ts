import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Utilitaire de fusion de classes Tailwind */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
