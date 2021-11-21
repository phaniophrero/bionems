import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "../../../redux/actions/auth";
import logoutIcon from "../../../public/assets/dashboard/power.svg";
import navbarDashboardData from "../../../data/navbarDashboardData";

const NavbarDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const signOutHandler = () => {
    // console.log("Logout");
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(signOut());
      if (typeof window === "undefined" && !isAuthenticated) {
        router.push("/");
      }
    }
  };

  return (
    <nav className="dashboard--navbar">
      <ul className="dashboard--navbar__list">
        {navbarDashboardData.map((item) => (
          <li className="dashboard--navbar__item" key={item.id}>
            <Link href={item.path}>
              <a className={item.cName}>
                <span className="dashboard--navbar__icon">
                  <Image src={item.icon} width={30} height={30} />
                </span>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
        <Link href="/bionemsadmin/profile">
          <a className="navbar--dropdown__item">
            Profile {user !== null && user.first_name}
          </a>
        </Link>
      </ul>

      <div className="dashboard--logout__button-wrapper">
        <button className="dashboard--logout__button" onClick={signOutHandler}>
          <Image src={logoutIcon} alt={logoutIcon} width={30} height={30} />
        </button>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
