import Image from "next/image";
import React from "react";
import clock from "../../Images/clock-regular.svg";

const EachSlide = ({ item }) => {
  const { img, description, time, place } = item;
  return (
    <section>
      <div className=" bg-slate-300">
        <img className="mx-auto" src={img} alt="" />
      </div>
      <div className="bg-red-200 p-4">
        <div className=" flex flex-row items-center gap-1 pb-3 ">
          <Image src={clock} width={17} height={17} alt="clock"></Image>
          <p className=" border-r-2 pr-2">{time}</p>
          <p className="pl-2">{place}</p>
        </div>
        <p>
          {description.length > 100
            ? description.slice(100) + " ..."
            : description}
        </p>
      </div>
    </section>
  );
};

export default EachSlide;
