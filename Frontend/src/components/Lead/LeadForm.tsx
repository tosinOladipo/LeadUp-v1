import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { useCreateLeadMutation } from "../../slice/ApiSlice/LeadApiSlice";
import Alert from "../Utils/Alert";

const LeadForm = () => {

    const { userId } = useParams();
    const { eventId } = useParams();


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [leadType, setLeadType] = useState('');
    const [ownerId, setOwnerId] = useState(userId);
    const [campaignId, setCampaignId] = useState(eventId);
    const [isAdded, setIsAdded] = useState(false);

    const [addLead, { isLoading }] = useCreateLeadMutation();

    const submitHandler = async (e: any) => {
        e.preventDefault();
        try {
          await addLead({ fullName, email, phoneNumber, leadType, ownerId, campaignId }).unwrap();
          setIsAdded(true)
          setFullName('')
          setEmail('')
          setPhoneNumber('')
          setLeadType('')
          setOwnerId('')
          setCampaignId('')
        } catch (err) {
          console.log(err);
        }
      }


  return (
    
 

    <form onSubmit={submitHandler}>

{isAdded && <Alert info="Lead added successfully"/>}

<div className="input-container flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <HiMiniBuildingStorefront />
          <input
            type="text"
            className="grow"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <MdEmail />
          <input
            type="text"
            className="grow"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <FaPhone />
          <input
            type="text"
            className="grow"
            placeholder="Phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <select value={leadType}
        onChange={(e) => setLeadType(e.target.value)}
        className="select select-bordered w-full">
        <option disabled>Select Role</option>
        <option value="Customer">Customer</option>
        <option value="Realtor">Realtor</option>
        </select>


        {isLoading && <p>Loading...</p>}


        <div className="input-action">
          <button type="submit" className="btn btn-primary">SUBMIT</button>
        </div>
      </div>


    </form>
  )
}

export default LeadForm