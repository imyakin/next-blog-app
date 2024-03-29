import './globals.css'
import Providers from './providers';
import { Header } from '../src/components/Header/Header';
import { Footer } from '../src/components/Footer/Footer';
import { Metadata } from 'next';
import { ScrollPageProgressBar } from "@/src/components/ScrollPageProgressBar/ScrollPageProgressBar";

export const metadata: Metadata = {
  title: {
    template:  '%s | Aleksandr Miakin',
    default: 'Aleksandr Miakin'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollPageProgressBar />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
