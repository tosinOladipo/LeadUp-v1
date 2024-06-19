import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";

interface IMemberTableRowProps {
    profileImg: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    role: string
}

const MemberTableRow = ({ profileImg, firstName, lastName, phoneNumber, email, role }: IMemberTableRowProps) => {



    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox border-gray-300" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={profileImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{firstName} {lastName}</div>
                    </div>
                </div>
            </td>
            <td>
                {phoneNumber}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{role}</td>
            <th className="flex justify-end gap-3">
                <button className="btn text-pink-500">
                <RiEdit2Fill size={20}/>
                </button>
                <button className="btn text-pink-500">
                <RiEyeFill size={20} />
                </button>
            </th>
        </tr>
    )

}

export default MemberTableRow