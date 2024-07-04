
import { useState } from "react";
import { useCreateFunnelMutation } from "../../slice/ApiSlice/FunnelApiSlice";
import Alert from "../Utils/Alert";


const FunnelForm = () => {

    const [addFunnel, { isLoading }] = useCreateFunnelMutation();  
    
    const [funnelName, setFunnelName] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const submitHandler = async (e: any) => {
        e.preventDefault();
        try {
          await addFunnel({funnelName}).unwrap();
          setIsAdded(true)
          setFunnelName('')
        } catch (err) {
          console.log(err);
        }
      }


  return (
    <form onSubmit={submitHandler}>
        {isAdded && <Alert info="Role added successfully"/>}
        <div className="input-container mt-4 flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
          <input
            type="text"
            className="grow"
            placeholder="Add Funnel"
            value={funnelName}
            onChange={(e) => setFunnelName(e.target.value)}
          />
        </label>

        {isLoading && <p>Loading...</p>}

        <div className="input-action mt-4">
          <button type="submit" className="btn btn-primary">ADD FUNNEL</button>
        </div>
      </div>
    </form>
  )
}

export default FunnelForm