import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { NexusUIProvider } from '@nexus-ds/react'
import Layout from './Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NexusUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NexusUIProvider>
  )
}
