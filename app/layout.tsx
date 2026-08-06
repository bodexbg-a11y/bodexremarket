import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BODEX BULGARIA | Полуремаркета и транспортни решения",
  description: "Самосвални, нискорамни, платформени и специализирани полуремаркета BODEX BULGARIA за българския пазар.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bg"><body>{children}</body></html>;
}
