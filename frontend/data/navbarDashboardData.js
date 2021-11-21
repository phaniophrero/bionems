import dashboardIcon from "../public/assets/dashboard/Dashboard.svg";
import productsIcon from "../public/assets/dashboard/clipboard.svg";
import mapsIcon from "../public/assets/dashboard/world.svg";
import reviewsIcon from "../public/assets/dashboard/users.svg";

const navbarDashboardData = [
  {
    id: "n1",
    name: "Dashboard",
    cName: "dashboard--navbar__link",
    path: "/bionemsadmin",
    icon: dashboardIcon,
    hover: true,
  },
  {
    id: "n2",
    name: "Products",
    cName: "dashboard--navbar__link",
    path: "/bionemsadmin/productlist",
    icon: productsIcon,
    hover: true,
  },
  {
    id: "n3",
    name: "Users",
    cName: "dashboard--navbar__link",
    path: "/bionemsadmin/userlist",
    icon: productsIcon,
    hover: true,
  },
  {
    id: "n4",
    name: "Maps",
    cName: "dashboard--navbar__link",
    path: "#",
    icon: mapsIcon,
    hover: true,
  },
  {
    id: "n5",
    name: "Reviews",
    cName: "dashboard--navbar__link",
    path: "#",
    icon: reviewsIcon,
    hover: true,
  },
  // {
  //   id: "n5",
  //   name: "###",
  //   cName: "dashboard--navbar__link",
  //   path: "#",
  //   hover: true,
  // },
  // {
  //   id: "n6",
  //   name: "###",
  //   cName: "dashboard--navbar__link",
  //   path: "#",
  //   hover: true,
  // },
];

export default navbarDashboardData;
