import { useGetAllUserQuery } from "../../../slice/ApiSlice/AuthApiSlice";
import MemberTableRow from "./MemberTableRow"

const MembersTable = () => {

    const { data, isSuccess } = useGetAllUserQuery();

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
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="pb-4">
                    {isSuccess && (
                        <>
                        {data?.map((user: any) => (
                            <MemberTableRow
                            key={user.id}
                            profileImg={user.profileImg}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            phoneNumber={user.phoneNumber}
                            email={user.email}
                            role={user.role}
                        />
                        ))}
                    </>
                    )}
                    


                </tbody>
            </table>
        </div>
    )
}

export default MembersTable