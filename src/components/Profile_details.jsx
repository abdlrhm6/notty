import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { noteContext } from '../App'
import './profile.scss'
function Profile_details() {

    const { note, setNote } = useContext(noteContext)
    const nav = useNavigate()
    const [userd, setuserd] = useState({

        username: note.currentU.user.username,
        email: note.currentU.user.email,
        pass: "",
        confirm_pass: "",
    })


    const handleInput = (e) => {

        setuserd({ ...userd, [e.target.name]: e.target.value })
    }

const [error, seterror] = useState("")
    const submit = async (e) => {

        e.preventDefault()

        if (userd.pass === userd.confirm_pass) {


            try {
                const res = await fetch(`https://note-nott.herokuapp.com/api/update_user/${note.currentU.user._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ username: userd.username, email: userd.email, password: userd.pass })
                })

                const data = await res.json()
                if (data) { 
                    // window.location.reload();
                    setNote({...note,loaded :true})
                    nav("/")
                }
            }
            catch(err){
                seterror(err.message)
            }
    }
    else{
        seterror("Passwords Not Matching")
    }


    }

    return (
        <div className='profile'>

            <h1>Profile Informations</h1>


            <form action="" onSubmit={submit}>

            {error && <p style={{color:'red'}}>{error}</p>}

                <label htmlFor="">Username</label>
                <input required type="text" placeholder='username' defaultValue={note.currentU.user.username} onChange={handleInput} name="username" />

                <label htmlFor="">Email</label>
                <input required type="email" placeholder='email' name="email" defaultValue={note.currentU.user.email} onChange={handleInput} />

                <label htmlFor="">Pasword</label>
                <input minLength={6} required type="password" placeholder='password' name="pass" onChange={handleInput} />

                <label htmlFor="">Re-enter Pasword</label>
                <input minLength={6} required type="password" placeholder=' re-enter password' name="confirm_pass" onChange={handleInput} />

                <input type="submit" value="Save Changes" />
            </form>
        </div>
    )
}

export default Profile_details