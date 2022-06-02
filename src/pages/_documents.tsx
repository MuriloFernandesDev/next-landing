import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/Header'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" />
                </Head>
                <body></body>
            </Html>
        )
    }
}
