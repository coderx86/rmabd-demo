"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem={true}
      defaultTheme="dark"
      storageKey="rma-theme-preference"
    >
      {children}
    </NextThemesProvider>
  );
}
