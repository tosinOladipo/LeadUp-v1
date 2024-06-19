import Nav from "./Nav/Nav"
import { BiHomeAlt2 } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiPaperPlane } from "react-icons/bi";
import { BiListPlus } from "react-icons/bi";
import { PiFunnelBold } from "react-icons/pi";

const SideNav = () => {
    return (
        <ul className="menu mt-8 bg-blue-950 w-full py-4 rounded-2xl">
            <Nav navTitle="Home" navIcon= {<BiHomeAlt2 size={16}/>} navURL="/"/>
            <Nav navTitle="Members" navIcon= {<BiUser size={16}/>} navURL="/members"/>
            <Nav navTitle="Funnels" navIcon= {<PiFunnelBold size={16}/>} navURL="/home"/>
            <Nav navTitle="Campaigns" navIcon= {<BiPaperPlane size={16}/>} navURL="/home"/>
            <Nav navTitle="Leads" navIcon= {<BiListPlus size={20}/>} navURL="/home"/>
        </ul>
    )
}

export default SideNav