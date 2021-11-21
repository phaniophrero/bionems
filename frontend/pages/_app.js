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
      {/* <Fragment> */}
      {router.pathname === "/bionemsadmin" ||
      router.pathname === "/sign-in" ||
      router.pathname === "/sign-up" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Head>
        <title>Bionems</title>
        <meta
          name="description"
          content="Bionems - Createur des nems bio avec la spécialité de la cuisinée Vietnamien en BIO Cuisine."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      {/* </Fragment> */}
    </Provider>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
