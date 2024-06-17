import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useCreateCompanyMutation } from "../../../slice/ApiSlice/companySlice";
import { setCredentials } from '../../../slice/AppSlice/companySlice';
import { useNavigate } from "react-router-dom";



const SignupForm = () => {


  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addCompany, { isLoading }] = useCreateCompanyMutation();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await addCompany({ companyName, companyEmail, companyPhoneNumber, companyAddress }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <HiMiniBuildingStorefront />
          <input
            type="text"
            className="grow"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <MdEmail />
          <input
            type="text"
            className="grow"
            placeholder="Company email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <FaPhone />
          <input
            type="text"
            className="grow"
            placeholder="Company phonenumber"
            value={companyPhoneNumber}
            onChange={(e) => setCompanyPhoneNumber(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <FaLocationDot />
          <input
            type="text"
            className="grow"
            placeholder="Company address"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </label>

        {isLoading && <p>Loading...</p>}

        <div className="input-action">
          <button type="submit" className="btn btn-primary">REGISTER</button>
        </div>
      </div>

    </form>

  );
};

export default SignupForm;
