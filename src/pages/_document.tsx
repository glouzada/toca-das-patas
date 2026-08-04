import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Toca das Patas - Clínica Veterinária e Pet Shop no Brooklin Paulista" />
        <meta name="keywords" content="veterinário, pet shop, cães, clínica veterinária, São Paulo" />
        <meta property="og:title" content="Toca das Patas" />
        <meta property="og:description" content="Clínica Veterinária & Pet Shop - Higiene, Saúde e Amor para seu melhor amigo" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
