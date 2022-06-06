import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Header /> */}
            <Home />
            <Footer />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
