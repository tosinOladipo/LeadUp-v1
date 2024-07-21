import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {  useGetLeadByIdQuery } from "../../slice/ApiSlice/LeadApiSlice";


const LeadViewForm = () => {

    const { leadId } = useParams();

    const { data } = useGetLeadByIdQuery(leadId);


    const [fullName, setFullName] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [phoneNumber, setPhoneNumber] = useState<any>('');
    const [leadType, setLeadType] = useState<any>('');
    const [leadStage, setLeadStage] = useState<any>('');
    const [feedback, setFeedback] = useState<any>('');
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        setFullName(data?.fullName || '' );
        setEmail(data?.email || '');
        setPhoneNumber(data?.phoneNumber || '');
        setLeadType(data?.leadType || '');
        setLeadStage(data?.leadStage || '');
        setFeedback(data?.feedback || '');
      }, [data?.fullName, data?.email, data?.phoneNumber, data?.leadType, data?.leadStage, data?.feedback]);

   

    

   


  return (
    
 

    <form  method="dialog">



<div className="input-container flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
          disabled
            type="text"
            className="grow"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
          disabled
            type="text"
            className="grow"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
          disabled
            type="text"
            className="grow"
            placeholder="Phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>


        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
          disabled
            type="text"
            className="grow"
            placeholder="LeadType"
            value={leadType}
            onChange={(e) => setLeadType(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
          disabled
            type="text"
            className="grow"
            placeholder="LeadType"
            value={leadStage}
            onChange={(e) => setLeadStage(e.target.value)}
          />
        </label>


        <textarea disabled className="textarea textarea-bordered" placeholder="Bio"value={feedback}
        onChange={(e) => setFeedback(e.target.value)}></textarea>

      </div>


    </form>
  )
}

export default LeadViewForm