import { useState } from "react";

export function Button() {
  const [state, setstate]=useState(false);
  return (
    <div>
      <div className={`h-10 w-70 flex justify-center items-center rounded-xl cursor-pointer text-white ${state==false?" bg-[#7e94ab]" : "bg-[#3edece]" } `} onClick={()=>{
        setstate(true);
      }}>
        continue
      </div>
    </div>
  );
}
