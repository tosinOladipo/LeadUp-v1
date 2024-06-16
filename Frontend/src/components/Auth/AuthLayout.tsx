import { Logo } from "../Layouts/LeftPane/LeftPane"

interface IAuthLayoutProps {
    children : React.ReactNode
}

const AuthLayout = ({children} : IAuthLayoutProps) => {

  return (
    <section className="flex flex-col h-screen bg-blue-950 gap-4 justify-center">
        <Logo/>
        {children}
    </section>
  )
}

export default AuthLayout