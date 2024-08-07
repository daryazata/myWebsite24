import type { Metadata } from "next";

import "./globals.css";
import { mitr } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mitr.className}>{children}</body>
    </html>
  );
}
