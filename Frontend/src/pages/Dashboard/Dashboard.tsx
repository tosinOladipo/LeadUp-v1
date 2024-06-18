import FeatCampaign from "../../components/Dashboard/FeatCampaigns/FeatCampaign"
import FeatLeads from "../../components/Dashboard/FeatlLeads/FeatLeads"
import Summary from "../../components/Dashboard/Summary/Summary"
import Layout from "../../components/Layouts/Layout"


const Dashboard = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-4">
          <Summary/>
      </section>
      <section className="flex flex-col px-4 py-4">
        <div className="text-xl font-semibold py-4">Likely to Buy Leads</div>
        <FeatLeads/>
        <div className="text-xl font-semibold py-4">Featured Campaigns</div>
        <FeatCampaign/>
      </section>
    </Layout>
  )
}

export default Dashboard