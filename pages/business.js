import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const getStaticProps = async ()=>{
    const res = await fetch("data.json");
    const data = await res.json()
    return console.log(data);
}

const business = () => {
    
  return (
    <div className="bg-white min-h-screen">
      <div className=" border-b-2 flex justify-between px-5 border-orange-200 text-black">
        {" "}
        <h1>BUSINESS</h1>
        <h1>+ MORE BUSINESS</h1>
      </div>
      <div className="lg:flex text-black">
        <div className="bg-orange-400  flex ">
          <img
            className="w-[60%]"
            src="data:image/jpeg;base64,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"
            alt="img"
          />
          <div className="w-[40%] text-white ">
            <div className="flex h-5 px- justify-center w-[100%] text-white">
              <AiOutlineClockCircle className="mt-1 mr-1" />
              <p className=" px-2">1 h ago </p>
              <p className="border-r-2 border-gray-200 mt-2"></p>
              <p className="mx-3">STOCK</p>
            </div>
            <div className="text-white">
              <h1 className="text-4xl">Dhaka stoke keep falling {}</h1>
            </div>
          </div>
        </div>
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
