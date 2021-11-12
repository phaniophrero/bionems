import React from "react";
import SignIn from "../../components/sign in page/sign-in";
import Image from 'next/image'

const SignInPage = () => {
  return (
    <div className="sign-in-page--background">

      <div className="eclipse-left-container">
        <div className="eclipse-left-image eclipse-image">
          <Image src='/assets/sign-in-page/eclipse-left.svg' alt='image' layout="fill" />
        </div>
      </div>

      <div className="eclipse-right-container eclipse-image">
        <div className="eclipse-right-image">
          <Image src='/assets/sign-in-page/eclipse-right.svg' alt='image' layout="fill" />
        </div>
      </div>

      <div className="eclipse-bottom-container eclipse-image">
        <div className="eclipse-bottom-image">
          <Image src='/assets/sign-in-page/eclipse-bottom.svg' alt='image' layout="fill" />
        </div>
      </div>

    {/* //? SIGN IN PAGE */}

      <div className="sign-in-page">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
