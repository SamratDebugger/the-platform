import { FaXmark } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

export default function NavModal({ ref }) {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <label className="input w-full">
          <LuSearch className="h-[1em] opacity-50" />
          <input type="search" required placeholder="Search" />
        </label>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error">
              <FaXmark />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
