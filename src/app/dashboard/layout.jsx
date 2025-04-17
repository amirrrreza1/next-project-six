
const Layout = ({ album, photo, todos, users }) => {
  return (
    <>
      <main className="w-full h-screen flex justify-around ">
        <div className="w-[50%]">
          <div className="h-full flex flex-col justify-center items-center p-3 border-r-2">{photo}</div>
        </div>
        <div className="w-[50%]">
          <div className="h-1/3 border-b-2">{album}</div>
          <div className="h-1/3  border-b-2">{todos}</div>
          <div className="h-1/3">{users}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
