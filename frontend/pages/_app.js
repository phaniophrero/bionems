import Head from "next/head";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { useRouter } from "next/router";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
// import { wrapper } from "../redux/store";
import "../styles/app.scss";
import { FbMessenger } from "../components/fb-messenger/fb-messenger";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      {router.pathname === "/bionemsadmin" ||
      router.pathname === "/sign-in" ||
      router.pathname === "/sign-up" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Head>
        <title>Bionems</title>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="../public/assets/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="../public/assets/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="../public/assets/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="../public/assets/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="../public/assets/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="../public/assets/favicons/favicon-196x196.png"
          sizes="196x196"
        />

        <link
          rel="icon"
          type="image/png"
          href="../public/assets/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="../public/assets/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="../public/assets/favicons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
        <meta
          name="description"
          content="Bionems - Createur des nems bio avec la spécialité de la cuisinée Vietnamien en BIO Cuisine."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bionems" />
        <meta property="og:type" content="website" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:url" content="https://www.bionems.fr" />
        <meta property="og:image" content="og-bionems.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <Component {...pageProps} />

      <FbMessenger />

      {router.pathname === "/bionemsadmin" ||
      router.pathname === "/sign-in" ||
      router.pathname === "/sign-up" ? (
        ""
      ) : (
        <Footer />
      )}
    </Provider>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
