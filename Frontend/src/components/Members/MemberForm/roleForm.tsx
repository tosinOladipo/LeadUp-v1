
import { useState } from "react";
import { useCreateRoleMutation } from "../../../slice/ApiSlice/RoleApiSlice";
import Alert from "../../Utils/Alert";



const RoleForm = () => {

    const [addRole, { isLoading }] = useCreateRoleMutation();  
    
    const [userRole, setUserRole] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const submitHandler = async (e: any) => {
        e.preventDefault();
        try {
          await addRole({userRole}).unwrap();
          setIsAdded(true)
          setUserRole('')
        } catch (err) {
          console.log(err);
        }
      }

  return (

    <form onSubmit={submitHandler}>
        {isAdded && <Alert info="Role added successfully"/>}
        <div className="input-container flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
            type="text"
            className="grow"
            placeholder="Add role"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          />
        </label>

        {isLoading && <p>Loading...</p>}

        <div className="input-action">
          <button type="submit" className="btn btn-primary">ADD ROLE</button>
        </div>
      </div>
    </form>
    
  );
}

export default RoleForm