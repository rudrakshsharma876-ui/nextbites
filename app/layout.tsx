import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Find your next bite: a little recipe site built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="footer">Made with 🧡 for NextBites</footer>
      </body>
    </html>
  );
}
