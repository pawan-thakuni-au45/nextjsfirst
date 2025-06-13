"use client"
import { useRef, useState } from "react"


export default function Signup(){

   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
        return <div>
        <input         type="text" placeholder="email" onChange={e=>setUsername(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>{
            console.log(username)
            console.log(password)
            
        }} >click me</button>
    </div>
}
