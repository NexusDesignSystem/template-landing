import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { NexusUIProvider } from '@nexus-ds/react'
import Layout from './layout'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '500', '600', '800', '900']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NexusUIProvider>
      <div className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </NexusUIProvider>
  )
}
