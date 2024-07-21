import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {  useGetLeadByIdQuery, useUpdateLeadMutation } from "../../slice/ApiSlice/LeadApiSlice";
import Alert from "../Utils/Alert";
import FunnelList from "../Funnel/FunnelList";

const LeadUpdateForm = () => {

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

   

    

    const [updateLead, { isLoading }] = useUpdateLeadMutation();

    const submitHandler = async (e: any) => {
        e.preventDefault();
        try {
          await updateLead({ id:leadId, leadStage, feedback }).unwrap();
          setIsAdded(true)
        } catch (err) {
          console.log(err);
        }
      }


  return (
    
 

    <form onSubmit={submitHandler} method="dialog">

{isAdded && <Alert info="Lead added successfully"/>}

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

        <select value={leadStage}
        onChange={(e) => setLeadStage(e.target.value)}
        className="select select-bordered w-full">
            <FunnelList />
        </select>

        <textarea className="textarea textarea-bordered" placeholder="Bio"value={feedback}
        onChange={(e) => setFeedback(e.target.value)}></textarea>


        {isLoading && <p>Loading...</p>}


        <div className="input-action">
          <button type="submit" className="btn btn-primary">SUBMIT</button>
        </div>
      </div>


    </form>
  )
}

export default LeadUpdateForm