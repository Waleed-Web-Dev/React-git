import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
//   const [data, setData] = useState([])
//   useEffect(() => {
//    fetch('https://api.github.com/users/hiteshchoudhary')
//    .then(res => res.json())
//    .then(res => setData(res))

// }, [])
 

  return (
    <>
    <div className='bg-gray-700 text-white text-3xl  p-3 m-5'>
    <h3>GitHUB Followers: {data.followers} </h3>

    <div  className='flex items-center justify-center'>
    <img  src= {data.avatar_url} alt="git pic" className='rounded-full object-cover ' />  
    </div>
    
    </div>
     
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}




