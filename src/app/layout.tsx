import './globals.css';
import { Quicksand } from 'next/font/google';

import Providers from '@/app/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const quicksand = Quicksand({
  subsets: ['latin-ext'],
});

export const metadata = {
  title: "Stefano's Portfolio Website",
  description:
    'Hi! My name is Stefano, a software developer, and this is my portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={quicksand.className}>
        <Providers>
          <Header />
          <main className="max-w-[56.25rem] min-h-[50vh] mx-auto w-11/12 mb-32">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
