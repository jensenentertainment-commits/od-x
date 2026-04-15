import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OD-X — Chemical Overdrive",
  description:
    "Aggressively unnecessary energy. Enter Chemical Overdrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}