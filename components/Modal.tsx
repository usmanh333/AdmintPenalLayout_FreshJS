export default function Modal() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as
      | HTMLDialogElement
      | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div class="text-white">
      <button
        className="btn shadow-lg btn-natural text-white border-white"
        onClick={openModal}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box absolute top-8">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const modal = document.getElementById("my_modal_3") as
                  | HTMLDialogElement
                  | null;
                if (modal) {
                  modal.close();
                }
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="form-control w-full max-w-xs mt-4 mb-4">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-success btn-sm text-white mb-8">Success</button>
        </div>
      </dialog>
    </div>
  );
}
