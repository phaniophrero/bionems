import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signIn, reset_signup_success } from "../../redux/actions/auth";
import Input from "../ui/input";
import Loader from "../ui/loader";
import SignInHelp from "./sign-in--help";
import Image from "next/image";
import logo from "../../public/images/logo-login.png";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const isCheckedHandler = () => setIsChecked((prev) => setIsChecked(!prev));

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const router = useRouter();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_signup_success());
    }
  }, [dispatch]);

  // const redirect = router.search
  //   ? router.search.split("=")[1]
  //   : "/bionemsadmin";

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(signIn(username, password));
    }
  };

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/bionemsadmin");
  }

  return (
    <div className="sign-in--background">
      <div className="logo">
        <Image src={logo} alt="logo bionems" width={200} height={60} />
      </div>

      <div className="sign-in">
        <form onSubmit={onSubmit} className="sign-in--form">
          <h1>Sign In</h1>
          <h2>Login to manage your account</h2>

          <Input
            wrapperCN="sign-in-input--wrapper"
            placeholder="enter email*"
            type="text"
            imageSRC="/assets/register-page/user.svg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            wrapperCN="sign-in-input--wrapper"
            placeholder="enter password*"
            type="password"
            imageSRC="/assets/register-page/key.svg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="checking">
            <div
              className={`check ${isChecked && "checked"}`}
              onClick={isCheckedHandler}
            />
            <p>Remember me</p>
          </div>
          {loading ? <Loader /> : <button type="submit">Sign in</button>}
        </form>
      </div>

      <SignInHelp />
    </div>
  );
};

export default SignIn;
