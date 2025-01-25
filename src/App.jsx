// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>

//     </div>
//   )
// }

// export default App

import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from '../components/Main/Main.jsx'

const App = () => {
  return (
    <>
      <Sidebar/>
     <Main />
    </>
  )
}

export default App
