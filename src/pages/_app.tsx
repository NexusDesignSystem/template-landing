import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { NexusUIProvider } from '@nexus-ds/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NexusUIProvider>
      <Component {...pageProps} />
    </NexusUIProvider>
  );
}
