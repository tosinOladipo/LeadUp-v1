import FunnelForm from "./funnelForm";


const AddFunnel = () => {

  return (
    <div className="stats shadow w-24 bg-blue-900">
      <div className="stat">
        <button className="stat-title text-sm font-semibold mb-2 text-white text-center pt-2"

          onClick={() => {
            const modal = document.getElementById('add-funnel-modal') as HTMLDialogElement;
            modal.showModal()

          }}>Add<br /> Funnel</button>
      </div>

      <dialog id="add-funnel-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Funnel</h3>
          <div className="py-4"><FunnelForm/></div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  )
}

export default AddFunnel