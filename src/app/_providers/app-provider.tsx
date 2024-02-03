"use client";

import { ThemeProvider } from "@/features/theme/theme-providet";
import { ComposeChildren } from "@/shared/lib/react";
import { ReactNode } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
};
