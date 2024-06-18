import FeatLeadRow from "./FeatLeadRow"

const FeatLeads = () => {
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
        <th>Lead source</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="pb-4">
      <FeatLeadRow 
      leadAvatar="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
      leadName="Banky Dave"
      leadPhoneNumber="0900000000"
      leadEmail="banky@mail.com"
      leadSource="Marketing"
      />

<FeatLeadRow 
      leadAvatar="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
      leadName="Jane Doe"
      leadPhoneNumber="0800000000"
      leadEmail="jane@mail.com"
      leadSource="Jennifer"
      />

<FeatLeadRow 
      leadAvatar="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
      leadName="Larry Matthew"
      leadPhoneNumber="0900300000"
      leadEmail="larry@mail.com"
      leadSource="Dozie"
      />

<FeatLeadRow 
      leadAvatar="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
      leadName="Mary Luke"
      leadPhoneNumber="0700300000"
      leadEmail="mary@mail.com"
      leadSource="Mimie"
      />
    </tbody>
  </table>
</div>
  )
}

export default FeatLeads