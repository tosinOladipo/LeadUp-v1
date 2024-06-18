import SummaryCard from "../SummaryCard/SummaryCard"
import { FaUserPlus } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";


const Summary = () => {
  return (
    <div className="flex gap-4 flex-wrap">
        <SummaryCard icon={<FaUserPlus size={30}/>} cardTitle="Total Leads" cardStat={2342} cardTimeline="Last 7 days"/>
        <SummaryCard icon={<FaHouseCircleCheck size={30}/>} cardTitle="Total Inspections" cardStat={2342} cardTimeline="Last 7 days"/>
        <SummaryCard icon={<FaHandshakeSimple size={30}/>} cardTitle="Total Likely to Buy" cardStat={2342} cardTimeline="Last 7 days"/>
        <SummaryCard icon={<FaMoneyBill1Wave size={30}/>} cardTitle="Total Mortgaged" cardStat={2342} cardTimeline="Last 7 days"/>
        <SummaryCard icon={<MdSavings size={30}/>} cardTitle="Total Sold" cardStat={2342} cardTimeline="Last 7 days"/>
    </div>
  )
}

export default Summary