import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center h-screen flex-col  gap-2'>
      <h1 className="text-2xl font-bold">Start counts..!</h1>
      <h2 className="text-xl font-semibold">count:{count}</h2>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={()=>setCount(count + 1)}>Add</button>
      <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={()=>setCount(count-1)}>Decrese</button>
    </div>
  )
}

export default App
