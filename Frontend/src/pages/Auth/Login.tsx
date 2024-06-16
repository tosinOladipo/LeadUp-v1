import AuthFormContainer from "../../components/Auth/AuthForm/AuthFormContainer"
import LoginForm from "../../components/Auth/AuthForm/LoginForm"
import AuthLayout from "../../components/Auth/AuthLayout"


const Login = () => {
  return (
    <AuthLayout>
        <AuthFormContainer formTitle="Login">
            <LoginForm/>
        </AuthFormContainer>
    </AuthLayout>
  )
}

export default Login