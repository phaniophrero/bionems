import React from "react";
import Link from "next/link";

const SignInHelp = () => {
  return (
    <div className="sign-in--help">
      <div className="register">
        <p>Don't have an account?</p>
        <Link href="/sign-up">Sign up</Link>
      </div>

      <div className="forget-password">
        <Link href="/">Forget password?</Link>
      </div>
    </div>
  );
};

export default SignInHelp;
