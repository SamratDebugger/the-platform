import moment from "moment";
import { FaImages, FaMessage, FaRegClock } from "react-icons/fa6";

export default function BlogCard({ blog }) {
  return (
    <div className=" ">
      <div className="flex gap-5 items-center bg-base-300 rounded-xl p-2">
        <div className="relative">
          <img
            className="rounded-xl w-full h-auto object-cover "
            src={blog.images}
            alt={blog.title}
          />
          <div className="badge text-blue-700 bg-white absolute left-2 top-2 hover:bg-blue-700 hover:text-white border-none rounded-full">
            Business
          </div>
        </div>

        <div>
          <h2 className="text-xl">{blog.title}</h2>
          <p className="my-5">{blog.description}</p>

          <div className="flex items-center gap-3">
            <button className="btn btn-sm btn-outline rounded-full ">
              <FaMessage />5
            </button>

            <p>{moment().format("MMMM Do, YYYY")}</p>
            <p className="flex  items-center gap-3">
              <FaRegClock />6 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
