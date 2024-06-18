interface IFeatCampaignProps {
    campaignTitle: string
    campaignSource: string
    campaignChannel: string
    campaignLeads: number
}


const FeatCampaignCard = ({ campaignTitle, campaignSource, campaignChannel, campaignLeads }: IFeatCampaignProps) => {
    return (
        <div className="card w-80 h-18 bg-base-100 shadow-xl image-full">
            <div className="card-body text-white">
                <h2 className="card-title text-base">{campaignTitle}</h2>
                <div className="flex justify-between w-full p-3">
                    <p>{campaignSource} | {campaignChannel}</p>
                    <p className="text-end font-semibold">{campaignLeads} leads</p>
                </div>
            </div>
        </div>
    )
}

export default FeatCampaignCard