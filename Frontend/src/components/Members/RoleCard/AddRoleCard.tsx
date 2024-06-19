

const AddRoleCard = () => {


  return (
    <div className="stats shadow w-24 bg-blue-900">
      <div className="stat">
        <button className="stat-title text-sm font-semibold mb-2 text-white text-center pt-2" 
        
        onClick={()=>{
          const modal = document.getElementById('add-role-modal') as HTMLDialogElement;
          modal.showModal()

        }}>Add<br /> Role</button>
      </div>

      <dialog id="add-role-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Role</h3>
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
  )
}

export default AddRoleCard