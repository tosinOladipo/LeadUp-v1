import LeftPane from "./LeftPane/LeftPane"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {

    return (
        <section className="main-container w-full h-screen flex">
            <LeftPane />
            <section className="right-container h-full right-0 ml-80">
                {children}
            </section>
        </section>
    )


}

export default Layout