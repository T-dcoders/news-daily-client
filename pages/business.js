import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

// export const getStaticProps = async ()=>{
//     const res = await fetch("data.json");
//     const data = await res.json()
//     return console.log(data);
// }

const business = () => {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBus(data));
  }, []);
  console.log(bus);

  return (
    <div className="bg-white min-h-screen">
      <div className=" border-b-2 flex justify-between px-5 border-orange-200 text-black">
        {" "}
        <h1>BUSINESS</h1>
        <h1>+ MORE BUSINESS</h1>
      </div>
      <div className="lg:flex text-black">
        <ul className="grid grid-cols-3 gap-4  ">
          {bus.map((item, i) => (
            <li key={i} className="w-50% bg-blue-50 ">
              <div className=" flex ">
                <img
                  className="w-[60%] h-[140px] rounded"
                  src={item.img}
                  alt="img"
                />
                <div className="w-[40%] text-black p-4">
                  <div className="flex h-5 px- justify-center w-[100%] text-black">
                    <AiOutlineClockCircle className="mt-1 mr-1" />
                    <p className=" px-2">{item.time}</p>
                    <p className="border-r-2 border-gray-200 mt-2"></p>
                    <p className="mx-3">STOCK</p>
                  </div>
                </div>
              </div>
              <div className="text-black">
                <h1 className="text-sm pb- ">
                  {item.description.length > 100
                    ? item.description.slice(0, 100)
                    : item.description}
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul>
        {users.map((user) => (
          <p>{user.title}</p>
        ))}
      </ul> */}
    </div>
  );
};

export default business;
