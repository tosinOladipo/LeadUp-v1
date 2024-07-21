import { useParams } from "react-router-dom";
import { LuCopy } from "react-icons/lu";
import { useGetCampaignByIdQuery } from "../../slice/ApiSlice/CampaignApiSlice";



const CampaignURL = () => {

    const { urlId } = useParams();

    const { data } = useGetCampaignByIdQuery(urlId);

    return (

        <div className='flex w-full gap-2 justify-between'>

            <div className='w-96 px-3 py-3 bg-gray-600 text-white rounded-md text-sm'>{data?.campaignURL.trim()}/{data?.campaignOwner.trim()}/{data?.campaignId.trim()}</div>
            <div className='px-3 py-3 text-white'><LuCopy size={20} /></div>

        </div>
    )
}

export default CampaignURL