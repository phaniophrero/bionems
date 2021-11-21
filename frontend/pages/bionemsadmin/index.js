import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { listUsers } from "../../redux/actions/userActions";
import Link from "next/link";
import LayoutDashboard from "../../components/layout/layoutDashboard";
import { getAllProducts } from "../../helpers/api-util";
import { signIn, reset_signup_success } from "../../redux/actions/auth";

const HomeDashboard = (props) => {
  //   const { products } = props;
  // const dispatch = useDispatch();

  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated) {
    router.push("/sign-in");
  }

  return (
    <LayoutDashboard>
      <div className="dashboard-container">
        <div className="dashboard--container">
          <div className="dashboard--cards">
            <div className="dashboard--cards__header">
              <h1 className="dashboard--cards__title">Dashboard All</h1>
              <span className="dashboard--cards__title-line"></span>
            </div>
            <div className="dashboard--cards__wrapper">
              <Link href="/bionems-admin/productlist">
                <a className="dashboard--link">
                  <div className="dashboard--card__small">
                    <h2 className="dashboard--card__title">Produits</h2>
                    <h3 className="dashboard--card__subtitle">
                      {/* {products.length} */}
                      products
                    </h3>
                  </div>
                </a>
              </Link>

              <Link href="#">
                <a className="dashboard--link">
                  <div className="dashboard--card__small">
                    <h2 className="dashboard--card__title">Traffic</h2>
                    {/* <h3 className="dashboard--card__subtitle">{analytics}</h3> */}
                    {/* <div>
                    {analytics.map((data) => (
                      <div key={data.id}>
                        <h3>{data.dimensions}</h3>
                      </div>
                    ))}
                  </div> */}
                  </div>
                </a>
              </Link>

              <Link href="/bionems-admin/userlist">
                <a className="dashboard--link">
                  <div className="dashboard--card__small">
                    <h2 className="dashboard--card__title">Users</h2>
                    <h3 className="dashboard--card__subtitle">
                      {/* {users.length} */}
                      users
                    </h3>
                  </div>
                </a>
              </Link>

              <Link href="/bionems-admin/reviews">
                <a className="dashboard--link">
                  <div className="dashboard--card__small">
                    <h2 className="dashboard--card__title">Reviews</h2>
                    <h3 className="dashboard--card__subtitle">
                      {/* {reviews.length} */}
                      reviews
                    </h3>
                  </div>
                </a>
              </Link>

              {/* <CardDashboard className="dashboard--card__small">
              <h2>Products3</h2>
            </CardDashboard>
            <CardDashboard className="dashboard--card__small">
              <h2>Products4</h2>
            </CardDashboard>
            <CardDashboard className="dashboard--card__small">
              <h2>Products5</h2>
            </CardDashboard> */}
            </div>
          </div>

          <div className="dashboard--card-right">
            <div className="dashboard--cards__header">
              <h1 className="dashboard--cards__title">Orders</h1>
              <span className="dashboard--cards__title-line"></span>
            </div>
            <div className="dashboard--cards__wrapper">
              <div className="dashboard--card__medium">
                <h2 className="dashboard--card__title">Orders</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

// export async function getStaticProps() {
//   const allProducts = await getAllProducts();

//   if (!allProducts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products: allProducts,
//     },
//   };
// }

export default HomeDashboard;
