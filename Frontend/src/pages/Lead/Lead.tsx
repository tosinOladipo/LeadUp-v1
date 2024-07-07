import LeadCard from "../../components/Lead/LeadCard"
import LeadForm from "../../components/Lead/LeadForm"

const Lead = () => {
  return (
    <section className="flex justify-center">
        <LeadCard formTitle="Fill the form below">
          <LeadForm/>
        </LeadCard>
    </section>
  )
}

export default Lead