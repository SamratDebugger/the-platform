import BlogCard from "./BlogCard";
import blogs from "../../blogCard.json";

export default function Blogs() {
  return (
    <section className="">
      <div className="grid lg:grid-cols-3 max-w-360 mx-auto p-5">
        <div className="col-span-2 grid  gap-5">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
}
