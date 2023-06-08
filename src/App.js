import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Navbar from './modules/user/components/shared/Navbar/Navbar'
const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes/> 
    </>
  )
}

export default App