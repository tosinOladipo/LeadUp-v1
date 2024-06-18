import AuthFormContainer from "../../components/Auth/AuthForm/AuthFormContainer"
import SignUpUserForm from "../../components/Auth/AuthForm/SignUpUserForm"
import AuthLayout from "../../components/Auth/AuthLayout"


const SignUpUser = () => {
  return (
    <AuthLayout>
        <AuthFormContainer formTitle="Complete your registration">
            <SignUpUserForm/>
        </AuthFormContainer>
    </AuthLayout>
  )
}

export default SignUpUser