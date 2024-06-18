import { NavLink } from "react-router-dom"

interface INavProps {
    navTitle : string,
    navURL : string,
    navIcon : any
}

const Nav = ({navTitle,navURL,navIcon}: INavProps) => {
    return (
        <li className="text-white px-6 w-full py-4">
            <NavLink to={navURL} className="flex gap-2 content-center text-sm">
                <div className="icon">{navIcon}</div><div className="nav-text">{navTitle}</div>
            </NavLink>
        </li>
    )
}

export default Nav