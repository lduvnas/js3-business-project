import React from "react";
import EmailImage from "../media/paper-plane.png";

export default function ConfirmCard() {
  return (
    <div>
      <div className="container">
        <h2>Please check your email</h2>
        <img src={EmailImage} alt="email" />
        <h3>We've sent you a link in your email to confirm your account</h3>
        <h3>Just click the link to complete the sign-up process</h3>
        <p>
          Haven't received an email? Please check your spam folder to make sure
          it's not there.
        </p>
      </div>
    </div>
  );
}
