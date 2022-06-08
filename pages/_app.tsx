import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../src/common/Layout";
import "./../styles/globals.css";
import "react-modal-video/scss/modal-video.scss";
import 'react-image-lightbox/style.css';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// // Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
import Head from "next/head";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
      <link rel="shortcut icon" href="/logocircle.png"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
