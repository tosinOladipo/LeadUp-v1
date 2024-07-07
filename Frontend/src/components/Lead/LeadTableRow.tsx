import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";

interface ILeadTableRowProps {
    fullName: string,
    phoneNumber: string,
    email: string,
    ownerId: string,
    leadType: string
    leadStage: string
}

const LeadTableRow = ({fullName, phoneNumber, email, ownerId, leadType, leadStage }: ILeadTableRowProps) => {
  return (
    <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox border-gray-300" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{fullName}</div>
                    </div>
                </div>
            </td>
            <td>
                {phoneNumber}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{ownerId}</td>
            <td>{leadType}</td>
            <td>{leadStage}</td>
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

export default LeadTableRow