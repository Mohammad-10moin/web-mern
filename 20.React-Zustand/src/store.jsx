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


// further we can use middlewares in zustand such as persist , devtools , immer 

// persist -- to perist the state across re-renders --Saves state to localStorage, sessionStorage, or IndexedDB

// devtools -- t0 use redux toolkit devtools inside the zustand 
// immer -- Enables writing mutative code while maintaining immutability under the hood