import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Home } from '../components/Home'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Home />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
