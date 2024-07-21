import { MdEmail } from "react-icons/md";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateCampaignMutation } from "../../slice/ApiSlice/CampaignApiSlice";
import Alert from "../Utils/Alert";

const CampaignForm = () => {

    const { userInfo } = useSelector((state: any) => state.auth);

    const [campaignName, setCampaignName] = useState('');
    const [campaignChannel, setCampaignChannel] = useState('');
    const [campaignOwner, setCampaignOwner] = useState(userInfo.userId);
    const [isAdded, setIsAdded] = useState(false);

    const [addCampaign, { isLoading }] = useCreateCampaignMutation();


    const submitHandler = async (e: any) => {
        e.preventDefault();
        try {
            await addCampaign({ campaignName, campaignChannel, campaignOwner }).unwrap();
          setIsAdded(true)
          setCampaignName('')
          setCampaignChannel('')
          setCampaignOwner('')
          
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
                        placeholder="Campaign name"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <MdEmail />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Enter campaign channel"
                        value={campaignChannel}
                        onChange={(e) => setCampaignChannel(e.target.value)}
                    />
                </label>

                {isLoading && <p>Loading...</p>}

                <div className="input-action">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default CampaignForm