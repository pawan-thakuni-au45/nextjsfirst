"use client"
import { useRef, useState } from "react"

import axios from "axios"
export default function Signup(){

   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
        return <div>
        <input type="text" placeholder="email" onChange={e=>setUsername(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>{
           

            axios.post("http://localhost:3000/api/v1/signup",{
                username,
                password
            })
            
        }} >click me</button>
    </div>
}
