import "../styles/app.scss";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../components/footer/footer";
import NavbarHome from "../components/navbar/navbarHome";
import NavbarTop from "../components/navbar/navbarTop";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavbarTop />
      <NavbarHome />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
