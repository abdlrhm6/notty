import React from 'react'
import Navbar from './Navbar'
import Note from './Note'
import Profile_details from "./Profile_details"
import Singlenote from './Singlenote'
export default function Page() {
  return (
    <div>
    <Navbar/>

   {(window.location.pathname=="/profile"
   ) ? <Profile_details/> : <Note/>}

    </div>
  )
}
