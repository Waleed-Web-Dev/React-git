import React, { useContext , useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {

 const [username, setUsername] = useState(" ")
 const [password, setPassword] = useState(" ")
 const  {setUser} =  useContext(UserContext)

  const  submitHandler = (e) => {
    e.preventDefault()

    setUser({username, password})
  }
  return (
    <div>
      <input type="text" 
      value={username}
      onChange={e => setUsername(e.target.value)}
      placeholder='Username' />
      <input type="text" 
      value={password}
      onChange={e => setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login
