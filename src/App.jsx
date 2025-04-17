import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className= "w-screen h-screen m-0 p-0 fixed inset-0"
      style={{backgroundColor: color}}
      >
        <div className='absolute flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2
                          rounded-3xl'>
                            <button
                            onClick={() => setColor("red")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "red"}}
                            >Red</button>
                            
                            <button
                            onClick={() => setColor("green")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "green"}}
                            >Green</button>
                            
                            <button
                            onClick={() => setColor("yellow")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "yellow"}}
                            >Yellow</button>

                            <button
                            onClick={() => setColor("blue")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "blue"}}
                            >Blue</button>
                            
                            <button
                            onClick={() => setColor("black")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "black"}}
                            >Black</button>
                            
                            <button
                            onClick={() => setColor("cyan")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "cyan"}}
                            >Cyan</button>
                            
                            <button
                            onClick={() => setColor("purple")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "purple"}}
                            >Purple</button>
                            
                            <button
                            onClick={() => setColor("pink")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "pink"}}
                            >Pink</button>

                            <button
                            onClick={() => setColor("white")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "white"}}
                            >White</button>

                            <button
                            onClick={() => setColor("orange")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "orange"}}
                            >Orange</button>

                            <button
                            onClick={() => setColor("silver")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "silver"}}
                            >Silver</button>

                            <button
                            onClick={() => setColor("violet")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "violet"}}
                            >Violet</button>

                            <button
                            onClick={() => setColor("brown")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "brown"}}
                            >Brown</button>

                            <button
                            onClick={() => setColor("gray")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "gray"}}
                            >Gray</button>

                            <button
                            onClick={() => setColor("lavender")}
                            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
                            style={{backgroundColor: "lavender"}}
                            >Lavender</button>

                            <button
                            onClick={() => setColor("indigo")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
                            style={{backgroundColor: "indigo"}}
                            >Indigo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
