import Link from "next/link";

const ROUTES = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/posts",
    name: "posts",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
];

const Layout = async ({ children , searchParams }) => {

  return (
    <>
      <header className="w-full h-[60px] m-auto bg-black text-white flex   justify-center items-center gap-3">
        <nav className="space-x-10 ">
          {ROUTES.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="h-[60px] px-2 hover:underline"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
