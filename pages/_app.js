import "../styles/app.scss";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../components/footer/footer";
import "../styles/app.scss";
import Navbar from "../components/navbar/navbar";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
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

export default wrapper.withRedux(MyApp)
