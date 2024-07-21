import { Link } from "react-router-dom"
import CampaignURL from "../../Campaign/CampaignURL"

interface IFeatCampaignProps {
    campaignId: string
    campaignTitle: string
    campaignSource: string
    campaignChannel: string
    campaignLeads: number
}


const FeatCampaignCard = ({ campaignId, campaignTitle, campaignSource, campaignChannel, campaignLeads }: IFeatCampaignProps) => {
    return (
        <div className="card w-80 h-18 bg-base-100 shadow-xl image-full">
                <div className="card-body text-white">
                    <h2 className="card-title text-base">{campaignTitle}</h2>
                    <Link to={`/campaign/${campaignId}`}>
                    <div className="flex justify-between w-full py-3"
                     onClick={() => {
                        const modal = document.getElementById('add-campaignURL-modal') as HTMLDialogElement;
                        modal.showModal()
          
                      }}>
                        <p>{campaignSource} | {campaignChannel}</p>
                        <p className="text-end font-semibold">{campaignLeads} leads</p>
                    </div> 
                    </Link>
                </div>

                <dialog id="add-campaignURL-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Copy Campaign URL</h3>
              <div className="py-4">
                <CampaignURL/>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>


        </div>
    )
}

export default FeatCampaignCard