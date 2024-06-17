import AuthFormContainer from "../../components/Auth/AuthForm/AuthFormContainer"
import SignupForm from "../../components/Auth/AuthForm/SignupForm"
import AuthLayout from "../../components/Auth/AuthLayout"


const SignUpUser = () => {
  return (
    <AuthLayout>
        <AuthFormContainer formTitle="Complete your registration">
            <SignupForm/>
        </AuthFormContainer>
    </AuthLayout>
  )
}

export default SignUpUser