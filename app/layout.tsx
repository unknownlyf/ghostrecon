import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profile Preview",
  description: "View publicly available professional profiles.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
