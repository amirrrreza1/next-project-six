const Layout = ({ album, photo }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <main>
        <div>{album}</div>
        <div>{photo}</div>
      </main>
    </>
  );
};

export default Layout;
