import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  let passref = useRef(null)
  const PassGen = useCallback(() => {
      let pass= ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%^&*()`~?/"

      for(let i=1; i< length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    console.log(passref)
    passref.current?.select();
    passref.current?.setSelectionRange(0,5)

    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
        PassGen()
  }, [length, numberAllowed, charAllowed, PassGen])

  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-black">
  <div className="bg-gray-700 p-6 m-4 w-1/2 mx-auto my-auto space-y-4 rounded-80">
    {/* First Row */}
    <div className="flex space-x-2">
      <input
        type="text"
        value={password}
        placeholder="Password"
        className="flex-grow p-2 border border-gray-300 rounded"
        readOnly
        ref={passref}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick = {
        copyPass
      }>Copy</button>
    </div>
    {/* Second Row */}
    <div className="flex items-center space-x-4">
     
      <input
        type="range"
        id="length"
        min={8}
        max={50}
        value={length}
        className="w-1/2"
        onChange={ e => setLength(e.target.value)}
      />
       <label htmlFor="length" className="mr-2">Length: {length}</label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" onChange={() => {
          setNumberAllowed(prev => !prev)
        }}/>
        Numbers
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" onChange={() => {
          setCharAllowed(prev => !prev)
        }}/>
        Characters
      </label>
    </div>
  </div>
</div>


   </>
  )
}

export default App
