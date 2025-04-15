const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return (
    <>
      <h1 className="text-xl font-bold text-center mb-4">10 Last Seen Users</h1>
      <section className="flex flex-wrap justify-around items-center gap-1">
        {data.slice(0, 10).map((user) => (
          <div key={user.id} className="w-[15%] h-[60px] m-2">
            <p className="text-center bg-gray-400 p-1 text-sm rounded-md">
              {user.name.slice(0, 25)}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Users;
