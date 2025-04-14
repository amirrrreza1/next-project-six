const Layout = ({ album, photo , todos , users }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <main>
        <div>{album}</div>
        <div>{photo}</div>
        <div>{todos}</div>  
        <div>{users}</div>
      </main>
    </>
  );
};

export default Layout;
