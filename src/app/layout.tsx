import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EventPlanify',
  description:
    'EventPlanify is your go-to application for organizing and managing all your events effortlessly. From intimate gatherings to large-scale conferences, our platform provides you with the tools you need to plan, promote, and execute your event to perfection. With EventPlanify, bring your event vision to life with ease.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
