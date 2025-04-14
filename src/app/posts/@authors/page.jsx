"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Authors = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedUserId = searchParams.get("userId");

  useEffect(() => {
    const dataFetcher = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    };
    dataFetcher();
  }, []);

  const handleClick = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("userId", id);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-5">Authors</h2>
      {data.map((item) => {
        const isSelected = selectedUserId === item.id.toString();

        return (
          <div
            onClick={() => handleClick(item.id)}
            key={item.id}
            className={`cursor-pointer w-[95%] md:w-[45%] lg:w-[25%] h-[60px] 
              rounded-md flex justify-center items-center text-center 
              transition font-semibold 
              ${
                isSelected
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {item.username} - {item.name}
          </div>
        );
      })}
    </>
  );
};

export default Authors;
