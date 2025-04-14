const Post = async ({ params }) => {
  const param = await params;

  const PostRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${param.id}`
  );
  const PostData = await PostRes.json();

  const PostCommentRes = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${PostData.id}`
  );
  const PostCommentData = await PostCommentRes.json();
  console.log(PostCommentData);

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-5">
        Post {PostData.id}
      </h2>
      <div className="flex flex-wrap justify-around">
        <section className="w-[95%] m-auto  md:w-[45%] mt-3">
          <h4 className="text-center text-3xl mb-2">{PostData.title}</h4>
          <p className="text-justify text-xl">{PostData.body}</p>
        </section>
        <section className="w-[95%] m-auto md:w-[45%]  h-[300px] mt-3 overflow-y-scroll bg-gray-200 p-4 rounded-lg">
          <h4 className="text-center text-3xl mb-2">Comments</h4>
          {PostCommentData.map((comment, index) => {
            return (
              <div key={index} className="w-full p-2 bg-black mb-2 rounded-md ">
                    <p className="text-white">{comment.name} :</p>
                    <p className="text-gray-100">{comment.email}</p>
                    <p className="text-gray-300">{comment.body}</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Post;
