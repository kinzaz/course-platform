import { AppHeader } from "@/widgets/app-header/app-headet";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {" "}
      <AppHeader variant="auth" />
      {children}
    </>
  );
}
