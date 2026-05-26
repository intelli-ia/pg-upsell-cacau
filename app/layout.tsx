import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C.O.R.C. — Curso Online de Raciocínio Clínico",
  description:
    "Saia da pressão e do diabetes. Aprenda a raciocinar e conduzir casos do complexo ao simples no dia a dia com o Dr. Carlos Antônio Cacau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={merriweather.variable}>
      <body className="bg-primary text-secondary antialiased">{children}</body>
    </html>
  );
}
