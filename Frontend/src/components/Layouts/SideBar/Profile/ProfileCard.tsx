import Avatar from "./Avatar"
import { FaTimes } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

const ProfileCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-blue-900">
            <div className="card-body">
                <div className="card-actions flex justify-between">
                    <Avatar/>
                    <div className="flex gap-4">
                        <div className="rounded-full border border-white px-4 py-4 text-white"><RiEdit2Fill size={30}/></div>
                        <div className="rounded-full border  border-white px-4 py-4 text-white"><FaTimes size={30}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard