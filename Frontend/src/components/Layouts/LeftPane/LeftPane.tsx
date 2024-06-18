import SideNav from "../SideNav/SideNav"


export const Logo = () => {
    return <div className="logo w-full text-center text-xl font-bold text-white px-4 mt-1 py-6">LeadUp</div>
}

const LeftPane = () => {
  return (
    <section className="w-80 h-full bg-blue-900 fixed px-6">
        <Logo/>
        <SideNav/>
    </section>
  )
}

export default LeftPane