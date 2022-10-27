import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { noteContext } from '../App'
export default function DeleteNote(props) {
    const { note, setNote } = useContext(noteContext)
    
    const delete_task = async () => {
        const res = await fetch(`https://note-nott.herokuapp.com/api/delete_note/${note.chosen._id}`, {

            method: "DELETE",
            headers: { 'Authorization': `Bearer ${note.currentU.token}` },

        },
        )
        const data = await res.json()
        const notes_after_delete =note.noteItems.filter(n=>n._id != data.deletedItem._id);
        setNote({ ...note, noteItems: notes_after_delete,chosen:null, deleteM: false })

    }

    return (
        <div className={note.deleteM ? "modal-delete open" : "modal-delete"}>
            <div className='descr'>
                <h2>
                    Are you sure you want to
                    <br /> delete this note ?</h2>
                <div className="btns">
                    <button onClick={delete_task}>Yes</button>
                    <button className='cancel' onClick={() => {
                        setNote({ ...note, deleteM: false })
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.createPortal(
    DeleteNote, document.getElementById("modal-delete")
)   
