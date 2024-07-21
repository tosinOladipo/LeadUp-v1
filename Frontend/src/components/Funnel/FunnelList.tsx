
import { useGetAllFunnelsQuery } from '../../slice/ApiSlice/FunnelApiSlice';


const FunnelList = ( ) => {

    const { data, isLoading, isSuccess } = useGetAllFunnelsQuery();

  return (
    <>
    {isLoading && <option>Loading</option>}

    {
        isSuccess && (
            <>
            {data?.map((funnel: any) => (
                 <option key={funnel.id} value={funnel.funnelName}>{funnel.funnelName}</option>
            ))}
            </>
        )
    }
        
    </>
  )
}

export default FunnelList