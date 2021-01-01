import React from 'react'
import Signup from './Signup'
import { AuthProvider } from "../contexts/AuthContext"

export default function App() {
  return (
    <>
      <AuthProvider>
      <div 
      className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}>
      
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Signup/> 
        </div>
      </div>
     </AuthProvider>
      
      
    </>
  )
}
