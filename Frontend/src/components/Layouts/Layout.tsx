import Header from "./Header/Header"
import LeftPane from "./LeftPane/LeftPane"
import SideBar from "./SideBar/SideBar"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {

    return (
        <section className="main-container w-full h-screen flex">
            <LeftPane />
            <section className="right-container h-full w-full right-0 ml-80 flex">
                <div className="middle-container w-3/4 flex flex-col gap-4">
                    <Header/>
                    <div className="main-content-area">
                    {children}
                    </div>
                    </div>
                <SideBar/>
            </section>
        </section>
    )


}

export default Layout