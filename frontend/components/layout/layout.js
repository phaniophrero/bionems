import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestRefresh } from "../../redux/actions/auth";

function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(requestRefresh());
    }
  }, [dispatch]);

  return <>{props.children}</>;
}

export default Layout;
