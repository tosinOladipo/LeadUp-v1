import AuthFormContainer from "../../components/Auth/AuthForm/AuthFormContainer"
import SignupForm from "../../components/Auth/AuthForm/SignupForm"
import AuthLayout from "../../components/Auth/AuthLayout"


const Signup = () => {
  return (
    <AuthLayout>
        <AuthFormContainer formTitle="Signup Company">
            <SignupForm/>
        </AuthFormContainer>
    </AuthLayout>
  )
}

export default Signup