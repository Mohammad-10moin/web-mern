import { useEffect, useRef, useState } from "react"

export const Otp= ()=>{
    const otpCount=6;
    const [inputArr, setinputArr]= useState(new Array(otpCount).fill(""));
    const refArr = useRef([]);
    useEffect(()=>{
        refArr.current[0].focus();
    },[])
    const handleOnChange = (value, index)=>{

        if(isNaN(value)){
            return;
        }
        const newArr= [...inputArr];

        newArr[index]=value.slice(-1);
        setinputArr(newArr);
        refArr.current[index+1]?.focus();
        console.log(value);
    }
    return(
        <div>
            {
                inputArr.map((input,index)=>{
                    return <input 
                    value={input} 
                    key={index} 
                    ref={(input)=>{
                        (refArr.current[index]=input)
                    }}
                    type="text" 
                    className=" m-1 w-[40px] h-[50px] rounded-2xl bg-blue-800 px-4 text-white"
                    onChange={(e)=>{
                        handleOnChange(e.target.value , index);
                    }}
                    />
                })
            }
        </div>
    )
}

