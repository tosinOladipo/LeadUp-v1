import Avatar from "./Avatar"
import ProgressBar from "./ProgressBar"

const UnitSold = () => {
  return (
    <div className="card w-96 bg-white shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-base text-gray-800">Units sold by marketers</h2>
    <div className="flex flex-col gap-2">
        <div className="flex gap-4">
            <Avatar avatar="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"/><ProgressBar marketer="Amaka" unit={4}/>
        </div>
        <div className="flex gap-4">
            <Avatar avatar="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"/><ProgressBar marketer="Dozie" unit={3}/>
        </div>
        <div className="flex gap-4">
            <Avatar avatar="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"/><ProgressBar marketer="Mimie" unit={6}/>
        </div>
        <div className="flex gap-4">
            <Avatar avatar="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"/><ProgressBar marketer="Precious" unit={8}/>
        </div>
    </div>
  </div>
</div>
  )
}

export default UnitSold