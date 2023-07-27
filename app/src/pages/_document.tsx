import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'

export default function Document() {
  return (
    <Html>
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}