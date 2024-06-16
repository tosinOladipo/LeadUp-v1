import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="input-container flex flex-col gap-3">

    <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
    <MdEmail />
      <input type="email" className="grow" placeholder="Enter email address" />
    </label>

    <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
    <RiLockPasswordFill />
      <input type="password" className="grow" placeholder="password" />
    </label>

    <div className="input-action">
    <button className="btn btn-primary">REGISTER</button>
    </div>
  </div>
  
  );
};

export default LoginForm;
