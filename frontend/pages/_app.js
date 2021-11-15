import "../styles/app.scss";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../components/footer/footer";
import NavbarHome from "../components/navbar/navbarHome";
import NavbarTop from "../components/navbar/navbarTop";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Bionems</title>
        <meta
          name="description"
          content="Bionems - Createur des nems bio avec la spécialité de la cuisinée Vietnamien en BIO Cuisine."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarTop />
      <NavbarHome />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
