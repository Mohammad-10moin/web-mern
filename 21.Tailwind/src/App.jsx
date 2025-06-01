import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-orange-400'>child1</div>
        <div className='bg-blue-400'>child2</div>
        <div className='bg-green-400'>child3</div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='bg-orange-400 col-span-6'>Grid1</div>
        <div className='bg-blue-400 col-span-3'>Grid2</div>
        <div className='bg-green-400 col-span-3'>Grid3</div>
      </div>
    </>
  )
}

export default App
