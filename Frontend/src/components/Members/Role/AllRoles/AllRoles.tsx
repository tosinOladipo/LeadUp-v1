
import RoleCard from '../../RoleCard/RoleCard'
import { RiAdminFill } from "react-icons/ri";
import AddRoleCard from '../../RoleCard/AddRoleCard';
import { useGetAllRolesQuery } from '../../../../slice/ApiSlice/RoleApiSlice';

const AllRoles = () => {

  const { data, isError, isLoading, isSuccess } = useGetAllRolesQuery();




  return (
    <>
      {isError && <>Oops... Something went wrong. Unable to fetch data</>}
      {isLoading && <>Loading...</>}
      {isSuccess && (
        <div className="flex flex-wrap gap-4">
          {data?.map((role: any) => (
            <div key={role.id} className='role-col'>
              <RoleCard roleTitle={role.userRole} roleTotal={3} icon={<RiAdminFill size={40} />} />
            </div>
          ))}
          <AddRoleCard />
        </div>
      )}
    </>
  )
}

export default AllRoles