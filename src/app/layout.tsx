import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "НАЙТ-СИТИ — путь к корпорации-единорогу",
  description:
    "Телеграм-канал о разработке приложений, автоматизации рутины, ботах и нейросетях. Честный дневник пути к корпорации-единорогу.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
