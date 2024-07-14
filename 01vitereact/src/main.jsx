import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){

  return(
    <div>
      <h2>I am under the Water</h2>
    </div>
  )
}


const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: "Click me"
}

const newEl = (
  <a href='https://google.com'>Click me</a>
)



  const myuser = "pani aur men"

const SecEl = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  'this is text',
  newEl
)


ReactDOM.createRoot(document.getElementById('root')).render(
   SecEl 
)
