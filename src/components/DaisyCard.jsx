import moment from "moment";
import { FaMessage, FaRegClock } from "react-icons/fa6";

export default function DaisyCard({ blog }) {
  return (
    <div className="card bg-base-100 grid md:grid-cols-2 ">
      <figure className="rounded-box">
        <img className=" max-md:w-full" src={blog.images} alt={blog.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p>{blog.description}</p>
        <div className="card-actions items-center ">
          <button className="btn btn-sm btn-outline rounded-full ">
            <FaMessage />5
          </button>
          <p className="grow-0">{moment().format("MMMM Do, YYYY")}</p>
          <p className="flex  items-center gap-3 grow-0">
            <FaRegClock />6 min read
          </p>
        </div>
      </div>
    </div>
  );
}
