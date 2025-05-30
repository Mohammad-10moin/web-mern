import { create } from 'zustand'

export const useCountStore=create((set)=>({
    count:0,
    increment: ()=>{
        set((state)=>({count:state.count+1}))
    },
    decrement: ()=>{
        set((state)=>({count:state.count-1}))
    },
    AsyncIncrement: async()=>{
        await new Promise((resolve)=>setTimeout(resolve,5000));
        set((state)=>({count:state.count+5}));
    }
}))