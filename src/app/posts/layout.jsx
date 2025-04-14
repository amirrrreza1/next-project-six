const Layout =  ({ posts, authors }) => {  
  return (
    <>
      <main className="flex justify-around">
        <div className="w-[85%]">{posts}</div>
        <div className="w-[15%]">{authors}</div>
      </main>
    </>
  );
};

export default Layout;
