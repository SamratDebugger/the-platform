import DaisyCard from "./DaisyCard";
import blogs from "../../daisyCard.json";
import VerticalCard from "./VerticalCard";

export default function Blogs() {
  return (
    <section className="">
      <div className="grid min-[1070px]:grid-cols-3 max-w-360 mx-auto p-5 gap-30">
        <div className="col-span-2 grid  gap-5">
          {blogs.map((blog) => (
            <DaisyCard key={blog.title} blog={blog} />
          ))}
        </div>
        <div>
          <VerticalCard />
        </div>
      </div>
    </section>
  );
}
