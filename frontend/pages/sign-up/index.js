import React from "react";
import SignUp from "../../components/sign-up/sign-up";
import Image from "next/image";
import Layout from "../../components/layout/layout";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="register-page-background">
        <div className="eclipse-left-container">
          <div className="eclipse-left-image">
            <Image
              src="/assets/register-page/eclipse-left.svg"
              layout="fill"
              alt="image"
            />
          </div>
        </div>

        <div className="eclipse-top-container">
          <div className="eclipse-top-image">
            <Image
              src="/assets/register-page/eclipse-top.svg"
              layout="fill"
              alt="image"
            />
          </div>
        </div>

        <div className="eclipse-right-container">
          <div className="eclipse-right-image">
            <Image
              src="/assets/register-page/eclipse-right.svg"
              layout="fill"
              alt="image"
            />
          </div>
        </div>

        {/* //? REGISTER PAGE */}

        <div className="register-page">
          <SignUp />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
