const HomePage = () => {
  return (
    <>
      <div
        className=" bg-gradient-to-br from-blue-100 to-indigo-200 p-6 flex justify-center items-center"
        style={{ direction: "rtl" , height: `calc(100vh - 60px)` }}
      >
        <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8">
          <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
            پروژه مدیریت پست‌ها و داشبورد
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
            این پروژه با استفاده از{" "}
            <span className="font-semibold">Next.js</span> و APIهای رایگان طراحی
            شده و شامل بخش‌های متنوعی است:
          </p>
          <ul className="list-disc list-inside text-gray-800 text-md space-y-2 mb-8">
            <li>
              <span className="font-medium">صفحه پست‌ها:</span> امکان مشاهده و
              فیلتر پست‌ها بر اساس نویسنده
            </li>
            <li>
              <span className="font-medium">نمایش پست تکی:</span> شامل نمایش
              کامل پست و کامنت‌های آن
            </li>
            <li>
              <span className="font-medium">داشبورد:</span> نمایش اطلاعات آخرین
              کاربران، آلبوم‌ها، تسک‌ها و عکس‌ها با استفاده از{" "}
              <code>parallel routes</code>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/posts"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow"
            >
              مشاهده پست‌ها
            </a>
            <a
              href="/dashboard"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow"
            >
              ورود به داشبورد
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
