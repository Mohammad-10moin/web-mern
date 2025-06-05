import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#002959] h-screen flex justify-center items-center'>
      <Button/>
      {/* <div className='flex justify-center'>
        <div className='bg-orange-400'>child1</div>
        <div className='bg-blue-400'>child2</div>
        <div className='bg-green-400'>child3</div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='bg-orange-400 col-span-6'>Grid1</div>
        <div className='bg-blue-400 col-span-3'>Grid2</div>
        <div className='bg-green-400 col-span-3'>Grid3</div>
      </div>
      <p className='text-red-500'>Let's understand responsiveness</p>
      <div className='sm:bg-red-300 bg-amber-300'>Understanding Responsiveness implementation in tailwind</div>
      <div className='sm:flex'>
        <div className='bg-orange-400 sm:flex-1/2'>child1</div>
        <div className='bg-blue-400 sm:flex-1/4'>child2</div>
        <div className='bg-green-400 sm:flex-1/4'>child3</div>
      </div>
      <div className='grid sm:grid-cols-12 grid-cols-1'>
        <div className='bg-orange-400 sm:col-span-6'>Grid1</div>
        <div className='bg-blue-400 sm:col-span-3'>Grid2</div>
        <div className='bg-green-400 sm:col-span-3'>Grid3</div>
      </div> */}
    </div>
  )
}

export default App
