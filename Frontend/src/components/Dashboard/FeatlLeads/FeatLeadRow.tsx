interface IFeatLeadRowProps {
    leadAvatar : string,
    leadName : string,
    leadPhoneNumber : string,
    leadEmail : string,
    leadSource : string
  }

const FeatLeadRow = ({leadAvatar, leadName, leadPhoneNumber, leadEmail, leadSource} : IFeatLeadRowProps) => {



  return (
    <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox border-gray-300" />
      </label>
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={leadAvatar} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{leadName}</div>
        </div>
      </div>
    </td>
    <td>
      {leadPhoneNumber}
      <br/>
      <span className="badge badge-ghost badge-sm">{leadEmail}</span>
    </td>
    <td>{leadSource}</td>
    <th>
      <button className="btn btn-primary btn-xs text-white">View Feedback</button>
    </th>
  </tr>
  )
  
}

export default FeatLeadRow