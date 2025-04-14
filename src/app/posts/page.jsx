import Link from "next/link";

const Posts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-5">Posts</h1>
      <section className="flex flex-wrap justify-center gap-5">
        {data.map((post, index) => {
          return (
            <Link href={`/posts/${post.id}`} key={index} className="w-[95%] md:w-[45%] lg:w-[25%] h-[60px] bg-gray-200 rounded-md flex justify-center items-center  text-center">
              {post.title.slice(0, 70)}
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Posts;
