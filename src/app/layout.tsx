import Header from '@/component/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/component/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'T-GameLog',
  description: 'My Personal Game Log',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
