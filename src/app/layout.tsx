import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Modal } from '@/components/Modal'

const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeXchange 💸 ',
  description: 'Compramos tus criptos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>
        {children}
        <Modal/>
      </body>
    </html>
  )
}
