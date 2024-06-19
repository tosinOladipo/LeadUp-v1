import Layout from "../../components/Layouts/Layout"
import MembersTable from "../../components/Members/MembersTable/MembersTable";
import AddRoleCard from "../../components/Members/RoleCard/AddRoleCard";
import RoleCard from "../../components/Members/RoleCard/RoleCard"
import { RiAdminFill } from "react-icons/ri";
import { MdAdd } from "react-icons/md";

const Members = () => {

  return (
    <Layout>
      <section className="flex flex-col">

        <div className="flex flex-wrap gap-4">
          <RoleCard roleTitle="Admin" roleTotal={3} icon={<RiAdminFill size={40} />} />
          <RoleCard roleTitle="Digital" roleTotal={2} icon={<RiAdminFill size={40} />} />
          <RoleCard roleTitle="Supervisor" roleTotal={4} icon={<RiAdminFill size={40} />} />
          <RoleCard roleTitle="VCH" roleTotal={5} icon={<RiAdminFill size={40} />} />
          <RoleCard roleTitle="Marketer" roleTotal={4} icon={<RiAdminFill size={40} />} />
          <AddRoleCard />
        </div>

        <div className="flex flex-col">
          <div className="flex content-center justify-between py-6">
            <div className="py-4 text-base font-semibold">All Registered Members</div>
            <button className="btn bg-blue-900 text-white"
              onClick={() => {
                const modal = document.getElementById('add-member-modal') as HTMLDialogElement;
                modal.showModal()

              }}>
              <MdAdd size={20} />
              Add Member
            </button>

            <dialog id="add-member-modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Member</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>
          <MembersTable />
        </div>

      </section>
    </Layout>
  )
}

export default Members