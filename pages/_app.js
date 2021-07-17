import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Official Blog by Zype" />
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"
            integrity="sha512-z+/WWfyD5tccCukM4VvONpEtLmbAm5LDu7eKiyMQJ9m7OfPEDL7gENyDRL3Yfe8XAuGsS2fS4xSMnl6d30kqGQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer">
            </script>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/default.min.css"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            />
            <script>
                hljs.highlightAll()
            </script>
            </Head>
            <Component {...pageProps }/>
        </>
    )
}

export default MyApp;