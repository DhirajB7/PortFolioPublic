import "@/styles/globals.css";
import { Raleway } from "@next/font/google";
import Script from "next/script";
const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const showResume = true;
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JW6FHR00VP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JW6FHR00VP');
        `}
      </Script>
      {/* Clarity */}
      <Script type="text/javascript">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "fq1vxacep7");`}
      </Script>
      <main className={raleway.className}>
        <Component {...pageProps} flag={showResume} />
      </main>
    </>
  );
}
