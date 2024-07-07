import Layout from "../../components/Layouts/Layout"
import LeadTable from "../../components/Lead/LeadTable"


const AllLeads = () => {
    return (
        <Layout>
            <section className="flex flex-col">
                <div className="flex content-center justify-between py-6">
                    <div className="py-4 text-base font-semibold">All Leads</div>
                    <button className="btn bg-blue-900 text-white">
                        Add Member
                    </button>
                </div>

                <LeadTable/>

            </section>
        </Layout>
    )
}

export default AllLeads