import moment from "moment";
import { FaArrowRightLong, FaMessage, FaRegClock } from "react-icons/fa6";

export default function CarouselItems({ carousel }) {
  return (
    <div className="relative">
      <img
        src={carousel.img}
        alt={carousel.title}
        className="block h-full w-full m-auto"
      />
      <div className="absolute z-10 top-0 bottom-0 flex items-end">
        <div className="max-w-152 p-10 ">
          <h1 className="text-4xl font-bold leading-13">{carousel.title}</h1>
          <p className="my-5">{carousel.description}</p>
          <div className="flex items-center gap-3">
            <button className="btn btn-sm btn-outline rounded-full ">
              <FaMessage />5
            </button>
            <button className="btn btn-ghost">
              {carousel.author}
              <FaArrowRightLong />
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
