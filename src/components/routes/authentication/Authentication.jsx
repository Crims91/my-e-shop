import SignUpForm from "../../signUpForm/SignUpForm";
import SignInForm from "../../signInForm/SignInForm";

import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
