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
    <html lang="en" className="dark">
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
      <body
        className={`bg-light dark:bg-dark selection:bg-primary selection:text-dark ${quicksand.className}`}
      >
        <Providers>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary to-secondary animate-gradient"></div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
