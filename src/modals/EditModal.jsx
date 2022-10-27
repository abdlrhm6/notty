import React, { useContext, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { noteContext, } from '../App'
export default function EditModal() {

    const { note, setNote } = useContext(noteContext)
    const [first, setfirst] = useState(note.chosen.title)
    const [second, setsecond] = useState(note.chosen.desc)


    const submit = async function (e) {
        e.preventDefault()
        const data = await fetch("https://note-nott.herokuapp.com/api/edit_note", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${note.currentU.token}`
            },

            body: JSON.stringify({ title :first, desc: second, chosen : note.chosen._id })


        })

        const res = await data.json()
        console.log(res)
        const note_index = note.noteItems.findIndex( n => n._id === note.chosen._id)

       
       note.noteItems[note_index] = {...res}
        setNote({ ...note,noteItems : [...note.noteItems], editM: false, updateM: false, chosen: null })

    }



    const close = function () {

        setNote({ ...note, editM: false, updateM: false, chosen: null })
    }


    return (


        <div className={note.editM ? 'edit-modal open' : "edit-modal"}>
            <form className="form" onSubmit={submit}>
                <div className="head">
                    <h1>Edit NOTE</h1>
                </div>
                <label htmlFor="">Label</label>
                <input type="text" onChange={(e) => setfirst(e.target.value)} value={first} required />

                <label htmlFor="">Note text</label>
                <textarea onChange={(e) => setsecond(e.target.value)} value={second} required ></textarea>
                <button>Save</button>
                <button style={{ backgroundColor: "#fff", color: "#00a82d", border: "2px solid #00a82d", margin: "20px 0" }} onClick={close}>Cancel</button>

            </form>
        </div>
    )
}

ReactDOM.createPortal(
    EditModal, document.getElementById("edit-modal")
)   
