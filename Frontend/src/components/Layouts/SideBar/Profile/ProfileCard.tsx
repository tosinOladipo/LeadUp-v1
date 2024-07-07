import Avatar from "./Avatar"
import { FaTimes } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../slice/AppSlice/AuthSlice";
import { useLogoutMutation } from "../../../../slice/ApiSlice/AuthApiSlice";


const ProfileCard = () => {

    const dispatch = useDispatch();
const navigate = useNavigate();

const [logoutApiCall] = useLogoutMutation();

const logoutHandler = async () => {
  try {
    await logoutApiCall().unwrap();
    dispatch(logout());
    navigate('/auth');
  } catch (err) {
    console.error(err);
  }
};


    return (
        <div className="card w-96 shadow-xl bg-blue-900">
            <div className="card-body">
                <div className="card-actions flex justify-between">
                    <Avatar/>
                    <div className="flex gap-4">
                        <div className="rounded-full border border-white px-4 py-4 text-white"><RiEdit2Fill size={30}/></div>
                        <div className="rounded-full border  border-white px-4 py-4 text-white" onClick={logoutHandler}><FaTimes size={30}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard