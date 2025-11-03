import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Anton, Oswald, DM_Sans, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HackPoint - Cybersecurity Learning Platform',
  description:
    'HackPoint is a cybersecurity learning and event platform offering CTF challenges, courses, and CyberFest events.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${bebasNeue.variable} ${anton.variable} ${oswald.variable} ${dmSans.variable} ${poppins.variable} font-sans`}
      >
        <div className="min-h-screen bg-black">
          <main>{children}</main>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove browser extension attributes that cause hydration issues
              if (typeof window !== 'undefined') {
                const body = document.body;
                if (body.hasAttribute('cz-shortcut-listen')) {
                  body.removeAttribute('cz-shortcut-listen');
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
