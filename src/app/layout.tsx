import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Lawyer — AI Legal Assistant for Small Businesses",
  description: "Instant legal guidance powered by AI. Contracts, compliance, disputes — handled in seconds, not weeks.",
  keywords: "AI lawyer, legal assistant, small business legal, contract review, AI legal advice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
