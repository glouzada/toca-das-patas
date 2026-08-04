import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Karla:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
