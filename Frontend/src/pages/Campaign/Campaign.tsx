import CampaignForm from '../../components/Campaign/CampaignForm';
import FeatCampaignCard from '../../components/Dashboard/FeatCampaigns/FeatCampaignCard';
import Layout from '../../components/Layouts/Layout'
import { MdAdd } from "react-icons/md";
import { useGetCampaignByUserIdQuery } from '../../slice/ApiSlice/CampaignApiSlice';
import { useSelector } from 'react-redux';

const Campaign = () => {

  const { userInfo } = useSelector((state: any) => state.auth);

  const { data, isLoading, isSuccess } = useGetCampaignByUserIdQuery(userInfo.userId);

  return (
    <Layout>
      <section className='flex flex-col gap-4'>
        <div className="flex content-center justify-between py-6">
          <div className="py-4 text-base font-semibold">All Campaigns</div>
          <button className="btn bg-blue-900 text-white"
            onClick={() => {
              const modal = document.getElementById('add-campaign-modal') as HTMLDialogElement;
              modal.showModal()

            }}>
            <MdAdd size={20} />
            Add   Campaign
          </button>

          <dialog id="add-campaign-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add New Campaign</h3>
              <div className="py-4">
                <CampaignForm />
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

        <div className='flex gap-4 flex-wrap'>

          {isLoading && <p>Loading...</p>}

          {isSuccess && (
            <>
              {data?.map((campaign: any) => (
                <FeatCampaignCard
                  key={campaign.id}
                  campaignId={campaign.id}
                  campaignTitle={campaign.campaignName}
                  campaignSource={campaign.campaignOwner}
                  campaignChannel={campaign.campaignChannel}
                  campaignLeads={2}
                />
              ))}
            </>
          )}

        </div>

      </section>
    </Layout>
  )
}

export default Campaign