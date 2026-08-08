import React, { useEffect,  } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

function AuthContext({children}) {
  
// useEffect(() => {
//   setLocalStorage()
//   getLocalStorage()

// },)


  return (
    <div>
    {children}
    </div>
  )
}

export default AuthContext
