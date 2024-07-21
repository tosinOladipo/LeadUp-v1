import { useSelector } from "react-redux";
import { useGetLeadsByUserIdQuery } from "../../slice/ApiSlice/LeadApiSlice";
import LeadTableRow from "./LeadTableRow"


const LeadTable = () => {

    const { userInfo } = useSelector((state: any) => state.auth);

    const { data, isLoading, isSuccess } = useGetLeadsByUserIdQuery(userInfo.userId);

  return (
    <div className="h-96 overflow-x-auto overflow-y-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-sm py-4">
                        <th>
                            <label>
                                {/*  <input type="checkbox" className="checkbox border-gray-300" />*/}
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Owner</th>
                        <th>Lead Type</th>
                        <th>Lead Stage</th>
                        <th>Last Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="pb-4">
                    
                {isLoading && <tr><th>Loading...</th></tr>}

                    {isSuccess && (
                        <>
                        {data?.map((lead: any) => (
                            <LeadTableRow
                            key={lead.id}
                            id={lead.id}
                            fullName={lead.fullName}
                            phoneNumber={lead.phoneNumber}
                            email={lead.email}
                            ownerId={lead.ownerId}
                            leadType={lead.leadType}
                            leadStage={lead.leadStage}
                            updatedAt={lead.updatedAt}
                        />
                        ))}
                    </>
                    )}
                    


                </tbody>
            </table>
        </div>
  )
}

export default LeadTable