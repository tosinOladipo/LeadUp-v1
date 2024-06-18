import FeatCampaignCard from "./FeatCampaignCard"

const FeatCampaign = () => {
    return (
        <div className="flex gap-4 pt-4">
            <FeatCampaignCard campaignTitle="Waterview Experience" campaignSource="Marketing" campaignChannel="Instagram" campaignLeads={232} />
            <FeatCampaignCard campaignTitle="Citadel Phase 2" campaignSource="Wuike" campaignChannel="Facebook" campaignLeads={1030} />
            <FeatCampaignCard campaignTitle="Empire Terrace" campaignSource="Amaka" campaignChannel="Jiji" campaignLeads={56} />
        </div>
    )
}

export default FeatCampaign