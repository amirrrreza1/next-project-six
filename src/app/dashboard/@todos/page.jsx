const Todos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return (
    <>
      <h1 className="text-xl font-bold text-center mb-4">
        10 Last Seen Todos
      </h1>
      <section className="flex flex-wrap justify-around items-center gap-1">
        {data.slice(0, 10).map((todo) => (
          <div key={todo.id} className="w-[15%] h-[80px] m-2">
            <p className="text-center bg-gray-400 p-1 text-sm rounded-md">
              {todo.title.slice(0, 25)}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Todos;
