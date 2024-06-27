import Layout from "../../components/Layouts/Layout"
import MembersTable from "../../components/Members/MembersTable/MembersTable";
import { MdAdd } from "react-icons/md";
import AllRoles from "../../components/Members/Role/AllRoles/AllRoles";
import MemberForm from "../../components/Members/MemberForm/MemberForm";

const Members = () => {



  return (
    <Layout>
      <section className="flex flex-col">

        <AllRoles/>

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
                <div className="py-4">
                  <MemberForm/>
                </div>
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