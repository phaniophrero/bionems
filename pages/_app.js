<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/main
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
<<<<<<< HEAD
=======
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
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
<<<<<<< HEAD
>>>>>>> b3dc5e6 (ceva de genul)
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
=======
>>>>>>> upstream/main
}

export default MyApp;
