import React from "react";

const Ball = () => {
  return (
    <>
      <div className="relative">
        <img src={`${process.env.PUBLIC_URL}/ball.png`} className="w-[200px]" alt="ball" />

        <div className="bg-[rgba(0,0,0,0.8)] border border-[#000] rounded-full box-shadow-tooltip box-border px-4 py-4 text-white text-sm  opacity-100 absolute pointer-events-none z-20 whitespace-nowrap">
          이상해씨
        </div>

        <div className="absolute left-0 top-0">
          <img src={`${process.env.PUBLIC_URL}/icon01.png`} alt="이상해씨" />
        </div>
      </div>
    </>
  );
};

export default Ball;
