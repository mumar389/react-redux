import React, { useState } from 'react'
import { useDispatch,useSelector  } from 'react-redux';
import { setToken,setUser } from '../actions/index';
import User from './User';
const Login = () => {
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.token);
    // console.log("U GOT ME");
    console.log("Got user from backend-:",getData.user);
     const [user,setUserdata]=useState({
            email:'',
            password:''
        })
    const handleLogin=(e)=>{
        e.preventDefault();
       const token="Token Recvd"
       const user={
        _id:'sadfjhghsdjf',
        name:'Umar',
        email:'umar@gmail.com'
       }
       dispatch(setUser(user))
       dispatch(setToken(token))
       
        // console.log(user);
        // window.alert("login Successfull")
    }
   
    const handleChange=(e)=>{
        const {name,value}=e.target

        setUserdata((prev)=>{
           return {
            ...prev,
            [name]:value
           }
        })
    }


  return (
    <div>
        <form>
        Email-:<input type='email' name="email" onChange={handleChange} value={user.email}/>
        <br/>
        <br/>
        Password-: <input type='password' name="password" onChange={handleChange} value={user.password}/>
        <br/>
        <br/>
            <button onClick={handleLogin}>Login</button>
        
        </form>
      {
        getData.token!==null&&<>
        <p>Wow You Got it!!{getData.token}</p>
        <User/>
        </>
      }
     
        
    </div>
  )
}

export default Login