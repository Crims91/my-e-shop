import SignUpForm from "../../signUpForm/SignUpForm";
import SignInForm from "../../signInForm/SignInForm";

import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
