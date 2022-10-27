import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem.jsx'
import './Note.scss'
import { noteContext } from '../App'

export default function Note() {
  const { note, setNote } = useContext(noteContext)

 

  async function fetchdata() {

    const response = await fetch ("https://note-nott.herokuapp.com/api/mynotes" , {
      headers: {'Authorization': `Bearer ${note.currentU.token}`}})

    const data = await response.json()

    
      setNote({...note,noteItems : data})
      
    
  }
  useEffect(() => {

    fetchdata()
  }, [])


  return (
    <div className='note'>
 
      <h1>Latest Notes </h1>
      <div className="container">

        {note.noteItems?.map((el, index) => (

          <NoteItem key={index} note={el} />
        ))}

      </div>
    </div>
  )
}
