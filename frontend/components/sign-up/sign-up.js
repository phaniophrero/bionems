import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { signUp } from "../../redux/actions/auth";

import Loader from "../ui/loader";
import Image from "next/image";
import Input from "../ui/input";
import logo from "../../public/images/logo-login.png";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);
  const isCheckedHandler = () => setIsChecked((prev) => setIsChecked(!prev));

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register_success = useSelector((state) => state.auth.register_success);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // const [formData, setFormData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  // });
  // const { first_name, last_name, email, password } = formData;

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(signUp(first_name, last_name, username, password));
    }
  };

  // ? De verificat de ce nu ramane tokenul salvat dupa login

  if (typeof window !== "undefined" && isAuthenticated) {
    router.push("/bionemsadmin");
  }

  if (register_success) {
    router.push("/sign-in");
  }

  return (
    <div className="register-container">
      <div className="logo">
        <Image src={logo} alt="logo bionems" width={200} height={60} />
      </div>

      {/* // ? REGISTER COMPONENTS */}
      <div className="register">
        <div className="image-container">
          <div className="image">
            <Image
              src="/assets/register-page/register-image@3x.png"
              alt="image"
              layout="fill"
            />
          </div>
        </div>

        <form className="register-form" onSubmit={onSubmit}>
          <h1>Create your account</h1>
          <h2>Created for developers by developers</h2>

          <Input
            wrapperCN="register-input--wrapper"
            placeholder="Nom*"
            type="text"
            imageSRC="/assets/register-page/user.svg"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            wrapperCN="register-input--wrapper"
            placeholder="Prenom*"
            type="text"
            imageSRC="/assets/register-page/user.svg"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            wrapperCN="register-input--wrapper"
            placeholder="Adresse e-mail*"
            type="text"
            imageSRC="/assets/register-page/email.svg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            wrapperCN="register-input--wrapper"
            placeholder="Mot de passe*"
            type="password"
            imageSRC="/assets/register-page/key.svg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="terms">
            <div
              className={`checkbox ${isChecked && "checked"}`}
              onClick={isCheckedHandler}
            />
            <p>I agree to the Terms {"&"} Conditions</p>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <button type="submit">Creer mon compte</button>
          )}

          <div className="go-to-sign-in">
            <h4>Vous avez déjà un compte?</h4>
            <Link href="/sign-in">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
