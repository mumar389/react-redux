import React from 'react'
import { useSelector } from 'react-redux'
const User = () => {
    const getData=useSelector((state)=>state.token)
  return (
    <>
    <div>Name-:{getData.user.name}</div>
    <div>Email-:{getData.user.email}</div>
    </>
  )
}

export default User