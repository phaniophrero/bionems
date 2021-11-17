import "../styles/app.scss";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../components/footer/footer";
import "../styles/app.scss";
import Navbar from "../components/navbar/navbar";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp)
