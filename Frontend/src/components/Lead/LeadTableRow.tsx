import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LeadUpdateForm from "./LeadUpdateForm";
import LeadViewForm from "./LeadViewForm";

interface ILeadTableRowProps {
    id: string,
    fullName: string,
    phoneNumber: string,
    email: string,
    ownerId: string,
    leadType: string
    leadStage: string
    updatedAt: string
}

const LeadTableRow = ({ id, fullName, phoneNumber, email, ownerId, leadType, leadStage, updatedAt }: ILeadTableRowProps) => {

    const navigate = useNavigate();

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
            <td>{updatedAt}</td>
            <th className="flex justify-end gap-3">
                <button className="btn text-pink-500" onClick={() => {
                    const modal = document.getElementById('add-lead-view-modal') as HTMLDialogElement;
                    modal.showModal()
                    navigate(`/leads/${id}`)
                }}>
                    <RiEyeFill size={20} />
                </button>
                <button className="btn text-pink-500" onClick={() => {
                    const modal = document.getElementById('add-lead-update-modal') as HTMLDialogElement;
                    modal.showModal()
                    navigate(`/leads/${id}`)
                }}>
                    <RiEdit2Fill size={20} />
                </button>
                <div>
                    <dialog id="add-lead-update-modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Update New Lead</h3>
                            <div className="py-4">
                                <LeadUpdateForm/>
                            </div>
                            <div className="modal-action">
                                <form>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="submit" className="btn"onClick={() => {
                    navigate('/leads/')
                }}>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <dialog id="add-lead-view-modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">View Lead</h3>
                            <div className="py-4">
                                <LeadViewForm/>
                            </div>
                            <div className="modal-action">
                                <form>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="submit" className="btn"onClick={() => {
                    navigate('/leads/')
                }}>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </th>
        </tr>



    )
}

export default LeadTableRow