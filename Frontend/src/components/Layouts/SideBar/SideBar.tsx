import ProfileCard from "./Profile/ProfileCard"
import UnitSold from "./UnitSold/UnitSold"

const SideBar = () => {
  return (
    <section className="sidebar flex flex-col gap-4 py-4">
      <ProfileCard/>
      <UnitSold/>
    </section>
  )
}

export default SideBar