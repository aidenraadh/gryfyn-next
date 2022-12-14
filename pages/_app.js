import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-D5110NJXS5`}/>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5110NJXS5')
      `}
    </Script> 
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
