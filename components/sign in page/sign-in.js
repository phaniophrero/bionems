import React, { useState } from "react";
import Input from "../ui/input";
import SignInHelp from "./sign-in--help";

const SignIn = () => {
    const [isChecked, setIsChecked] = useState(false)
    const isCheckedHandler = () => setIsChecked(prev => setIsChecked(!prev))

  return (
    <div className="sign-in--background">
      <div className="sign-in">
        <form className="sign-in--form">
          <h1>Sign In</h1>
          <h4>Login to manage your account</h4>

          <Input
            wrapperCN="sign-in-input--wrapper"
            placeholder="enter username"
            type="text"
            imageSRC="/assets/register-page/username.svg"
          />

          <Input
            wrapperCN="sign-in-input--wrapper"
            placeholder="enter password"
            type="password"
            imageSRC="/assets/register-page/key.svg"
          />

          <div className="checking">
            <div className={`check ${isChecked && 'checked'}`} onClick={isCheckedHandler} />
            <p>Remember me</p>
          </div>

          <button>Sign in</button>
        </form>
      </div>

      <SignInHelp />
    </div>
  );
};

export default SignIn;
