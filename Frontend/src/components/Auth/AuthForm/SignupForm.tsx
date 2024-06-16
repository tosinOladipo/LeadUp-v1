import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const SignupForm = () => {
  return (
    <div className="input-container flex flex-col gap-3">
      <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
      <HiMiniBuildingStorefront />
        <input type="text" className="grow" placeholder="Company name" />
      </label>

      <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
      <MdEmail />
        <input type="text" className="grow" placeholder="Company email" />
      </label>

      <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
      <FaPhone />
        <input type="text" className="grow" placeholder="Company phonenumber" />
      </label>

      <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
      <FaLocationDot/>
        <input type="text" className="grow" placeholder="Company address" />
      </label>

      <div className="input-action">
      <button className="btn btn-primary">REGISTER</button>
      </div>
    </div>
    
  );
};

export default SignupForm;
