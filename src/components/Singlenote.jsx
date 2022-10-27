import React from 'react'
import Menu from './Menu'
import AddNote from '../modals/AddNote'
import DeleteNote from '../modals/DeleteNote'
import EditModal from '../modals/EditModal'
import { noteContext } from '../App'
import { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import './single.scss'
import moment from 'moment'

import { useLocation } from 'react-router-dom'
function Singlenote() {

  const { note, setNote } = useContext(noteContext)
  const [Snote, setSnote] = useState()

  const id = useLocation().pathname.split("/")[2]


  useEffect(() => {



    const fetchsingle = async () => {

      const res = await fetch(`https://note-nott.herokuapp.com/api/mynote/${id}`)

      const data = await res.json()
      if (data) { setSnote(data) }
    }

    fetchsingle()

  }, [])

  console.log(Snote)
  return (
    <>



      <Menu />
      <AddNote />
      <DeleteNote />
      {note.updateM && <EditModal />}

      <div>
        <Navbar />


        <div className="single_note">


          <h1>Note Details</h1>

          {Snote && (

            <>
              <h2>Note Title : {Snote.title}</h2>
              <p>{Snote.desc}</p>
              

              <div className="spans">


              <span>Created  :{moment(Snote.createdAt.split("T")[0], "YYYY-MM-DD").fromNow()}</span>
              <span>Updated :{moment(Snote.updatedAt.split("T")[0], "YYYY-MM-DD").fromNow()}</span>
              </div>

            </>


          )}



        </div>
      </div>


    </>
  )
}

export default Singlenote