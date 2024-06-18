import '@/styles/global.css'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Sylvie Zhang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const env = process.env.NODE_ENV;

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
      {env === 'development'
        ? null
        : <GoogleAnalytics gaId="G-0RP724T7RQ" />}
    </html>
  )
}
