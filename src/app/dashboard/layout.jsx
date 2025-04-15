
const Layout = ({ album, photo, todos, users }) => {
  return (
    <>
      <main className="w-full h-screen flex justify-around ">
        <div className="w-[50%] bg-gray-200">
          <div className="h-full bg-blue-500 p-3">{photo}</div>
        </div>
        <div className="w-[50%]">
          <div className="h-1/3 bg-red-500">{album}</div>
          <div className="h-1/3 bg-green-500">{todos}</div>
          <div className="h-1/3 bg-yellow-500">{users}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
