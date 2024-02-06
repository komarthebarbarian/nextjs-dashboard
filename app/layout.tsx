import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// ФОНТ СЕ ДЕФИНИШЕ У ЗАСЕБНОМ ФАЈЛУ У app/ui ФОЛДЕРУ ЗАТИМ СЕ ДОДАЈЕ КАО КЛЕСНЕЈМ У БОДИ ЕЛЕМЕНТУ
// АНТИАЛАЈЗД КЛАСА ЈЕ ОД ТЕЈЛВИНДА И ИСПЕГЛА ФОНТ ДА ИЗГЛЕДА ЛЕПО

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
