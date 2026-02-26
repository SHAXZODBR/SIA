import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIA | Smart Innovative Assistance",
  description: "Advanced Medical AI Ecosystem based in Tashkent, Uzbekistan. AI-driven analyzes for Radiology, Cardiology, Neonatology, and Anaesthesiology.",
  keywords: ["Medical AI", "SIA", "Radiology AI", "HealthTech Uzbekistan", "AI Diagnostic Support"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
