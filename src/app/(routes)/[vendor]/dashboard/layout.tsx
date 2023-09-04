
import type { Metadata } from 'next'


export const metadata = {
  title: 'Odasasa ',
  description: 'Odasasa official website',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <div >{children}</div>
   
  )
}
