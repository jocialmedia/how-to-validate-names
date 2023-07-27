import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

 
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
 
export default App