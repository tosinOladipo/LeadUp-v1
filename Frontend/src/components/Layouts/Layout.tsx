import LeftPane from "./LeftPane/LeftPane"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {

    return (
        <section className="main-container w-full h-screen flex">
            <LeftPane />
            <section className="right-container h-full w-full right-0 ml-80 flex">
                <div className="middle-container w-3/4">{children}</div>
                <div className="sidebar w-1/4">Profile</div>
            </section>
        </section>
    )


}

export default Layout