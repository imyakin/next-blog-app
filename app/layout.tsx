import './globals.css'
import Providers from './providers';
import { Header } from '../src/components/Header/Header'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Aleksandr Miakin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
