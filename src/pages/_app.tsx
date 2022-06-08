import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Embed } from '../components/Embed'
import { Icons } from '../components/Icons'
import { Clients } from '../components/Clients'
import { Resellers } from '../components/Resellers'
import { Thousands } from '../components/Thousands'
import { Testimonials } from '../components/Testimonials'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Main />
            <Embed />
            <Icons />
            <Clients />
            <Resellers />
            <Thousands />
            <Testimonials />
            <Footer />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
