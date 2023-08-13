import React from 'react'

const Auithorizer = ({children}) => {
    const isLogin = true;
    if(!isLogin) return <h1 style={{color:'red', textAlign:'center'}}>Access Denied</h1>
  return (
    <div>{children}</div>
  )
}

export default Auithorizer