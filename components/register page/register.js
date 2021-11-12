import React, { useState } from "react";
import Image from "next/image";
import Input from "../ui/input";
import Link from "next/link";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isCheckedHandler = () => setIsChecked((prev) => setIsChecked(!prev));

  return (
    <div className="register-container">
      <div className="ring-container">
        <div className="ring-image">
          <Image
            src="/assets/register-page/circle.svg"
            alt="image"
            layout="fill"
          />
        </div>
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

        <form className="register-form">
          <h1>Create your account</h1>
          <h2>Created for developers by developers</h2>

          <Input
            wrapperCN="register-input--wrapper"
            placeholder="choose a username"
            type="text"
            imageSRC="/assets/register-page/username.svg"
          />
          <Input
            wrapperCN="register-input--wrapper"
            placeholder="type email address"
            type="text"
            imageSRC="/assets/register-page/email.svg"
          />
          <Input
            wrapperCN="register-input--wrapper"
            placeholder="choose a password"
            type="password"
            imageSRC="/assets/register-page/key.svg"
          />

          <div className="terms">
            <div
              className={`checkbox ${isChecked && "checked"}`}
              onClick={isCheckedHandler}
            />
            <p>I agree to the Terms {"&"} Conditions</p>
          </div>

          <button>Create my account</button>

          <div className="go-to-sign-in">
            <h4>Already have an account?</h4>
            <Link href="/sign-in">sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
