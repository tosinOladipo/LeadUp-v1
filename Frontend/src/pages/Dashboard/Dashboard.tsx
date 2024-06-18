import Summary from "../../components/Dashboard/Summary/Summary"
import Layout from "../../components/Layouts/Layout"


const Dashboard = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-4">
          <Summary/>
      </section>
    </Layout>
  )
}

export default Dashboard