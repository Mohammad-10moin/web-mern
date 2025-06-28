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
        const newValue= value.trim();
        const newArr= [...inputArr];

        newArr[index]=newValue.slice(-1);
        setinputArr(newArr);
        newValue && refArr.current[index+1]?.focus();
        console.log(newValue);
    }

    const handleOnKeyDown = (event,index)=>{
        // console.log(event);
        // console.log(refArr.current[index]);
        // if(event.key=="Backspace" && refArr.current[index].value==""){
        if(event.key=="Backspace" && !event.target.value){
            refArr.current[index-1]?.focus();
        }
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

                    onKeyDown={(e)=>{
                        handleOnKeyDown(e,index);
                    }}
                    />
                })
            }
        </div>
    )
}

