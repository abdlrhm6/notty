import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { noteContext } from '../App'
import xicon from '../assets/xicon.png'





export default function AddNote() {
    const { note, setNote } = useContext(noteContext)
    const navigate = useNavigate()



    const [title, setinput] = useState("")
    const [body, setTxt] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        const data = await fetch("https://note-nott.herokuapp.com/api/add_note", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authorization" :`Bearer ${note.currentU.token}`
            },
            body: JSON.stringify({ title, desc:body })
        })

        const res = await data.json()
       
        setNote({ ...note, noteItems : [...note.noteItems,res.newnote], addM: false })
       
        setinput("")
        setTxt("")
        navigate("/space")



    }
    return (
        <div className={note.addM ? "modal open" : "modal"}>
            <form className="form" onSubmit={submitForm}>
                <div className="head">
                    <h1>ADD NOTE</h1>
                    <img src={xicon} onClick={() => setNote({ ...note, addM: false })} />
                </div>
                <label htmlFor="">Label</label>
                <input value={title} type="text" placeholder='Note Name' onChange={(e) => setinput(e.target.value)} required />

                <label htmlFor="">Note text</label>
                <textarea value={body} placeholder='Note Text' onChange={(e) => setTxt(e.target.value)} required />


                <button>Save</button>

            </form>
        </div>
    )
}

ReactDOM.createPortal(
    AddNote, document.getElementById("modal")
)   
