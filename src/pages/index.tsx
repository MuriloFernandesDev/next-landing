import React from 'react'
import Head from 'next/head'
import { Html } from 'next/document'

function Home() {
    return (
        <>
            <Head>
                <title>BuyPhone</title>
                <meta name="description" content="Buy Phone"></meta>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>
            <main></main>
        </>
    )
}

export default Home
