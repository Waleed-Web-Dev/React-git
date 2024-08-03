import React from 'react'
import {useParams} from "react-router-dom"
function User() {
  const {userID} = useParams()
  return (
    <div>
      <h3 className='bg-gray-800 p-3 m-3 text-center text-white text-3xl'>
        User Data : {userID}
      </h3>
    </div>
  )
}

export default User
