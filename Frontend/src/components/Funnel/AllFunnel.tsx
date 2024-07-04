import { useGetAllFunnelsQuery } from "../../slice/ApiSlice/FunnelApiSlice";
import { RiAdminFill } from "react-icons/ri";
import AddFunnel from "./AddFunnel"
import FunnelCard from "./FunnelCard";

const AllFunnel = () => {

  const { data, isError, isLoading, isSuccess } = useGetAllFunnelsQuery();

  return (
    <>
      {isError && <>Oops... Something went wrong. Unable to fetch data</>}
      {isLoading && <>Loading...</>}
      {isSuccess && (
        <div className="flex flex-wrap gap-4">
          <FunnelCard funnelTitle="Leads" funnelTotal={23} icon={<RiAdminFill size={40} />} />
          {data?.map((funnel: any) => (
            <div key={funnel.id} className='role-col'>
              <FunnelCard funnelTitle={funnel.funnelName} funnelTotal={3} icon={<RiAdminFill size={40} />} />
            </div>
          ))}
          <AddFunnel />
        </div>
        )}
    </>
  )
}

export default AllFunnel