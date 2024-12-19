import React, { useState } from "react";
import Display from "./Display";
import CopyBtn from "./CopyBtn";

const Slider = () => {
  const [slideNum, SetslideNum] = useState(20);
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";

  const [password, setPassword] = useState("");

  return (
    <>
      <div className="  w-full flex justify-center pt-5">
        Slide To Adjust password Length
      </div>

      <div className="  w-full flex justify-center gap-4 py-7">
        <div className=" text-xl font-semibold text-green-600 ">6</div>
        <input
          className=" w-60 text-zinc-900 "
          type="range"
          min={6}
          max={50}
          value={slideNum}
          onChange={(e) => {
            const value = e.target.value;
            SetslideNum(Number(value));
          }}
        ></input>
        <div className=" text-xl font-semibold text-green-600 ">50</div>
      </div>
      <div>
        <div className="w-full flex justify-center py-7">Password Length : {slideNum}</div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center">
        <button
          onClick={() => {
            let genPassword = "";

            for (let i = 0; i < slideNum; i++) {
              let passVar = Math.floor(Math.random() * chars.length);
              genPassword += chars[passVar];
            }

            setPassword(genPassword);
          }}
          className=" bg-green-500 px-3 py-2 pb-3 rounded-lg active:bg-green-400 outline-none"
        >
          Get Password
        </button>

        <Display Password={password}></Display>
        <CopyBtn password={password}></CopyBtn>
      </div>
    </>
  );
};

export default Slider;
