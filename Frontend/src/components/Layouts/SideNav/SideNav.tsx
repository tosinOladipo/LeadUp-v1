import Nav from "./Nav/Nav"
import { BiHomeAlt2 } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiPaperPlane } from "react-icons/bi";
import { BiListPlus } from "react-icons/bi";

const SideNav = () => {
    return (
        <ul className="menu mt-10 bg-blue-950 w-full py-4 rounded-lg">
            <Nav navTitle="Home" navIcon= {<BiHomeAlt2/>} navURL="/home"/>
            <Nav navTitle="Member" navIcon= {<BiUser/>} navURL="/home"/>
            <Nav navTitle="Campaign" navIcon= {<BiPaperPlane/>} navURL="/home"/>
            <Nav navTitle="Leads" navIcon= {<BiListPlus/>} navURL="/home"/>
        </ul>
    )
}

export default SideNav