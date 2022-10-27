import React, { useContext } from 'react'
import './NoteItem.scss'
import { noteContext } from '../App'
import { Link } from 'react-router-dom'

export default function NoteItem(props) {

  const { note, setNote } = useContext(noteContext)





  const handle_delete = (item) => {
    setNote({ ...note, chosen: item, deleteM: true })

  }

  const handle_edit = (item) => {
    setNote({ ...note, editM: true, chosen: item, updateM: true })


  }
  return (

    <>
      <div className='single-note'>

        <Link className='link' to={`/notes/${props.note._id}`}>
          <h2>{props.note?.title}.</h2>
          <p>Details : {props.note?.desc}...</p>
          <span> Created at : {props.note?.createdAt.split("T")[0]}</span> <br />
        </Link>
        <div className="deletedit">




          <button onClick={() => { handle_edit(props.note) }}>EDIT</button>

          <div className="" >

            <button className='dlt' onClick={() => handle_delete(props.note)}>DELETE</button>
          </div>
        </div>



      </div>

    </>

  )
}
