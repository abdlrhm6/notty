import React, { useState , useContext } from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import Homenav from './Homenav'
import { noteContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Home() {

  const { note, setNote } = useContext(noteContext)

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, setError] = useState("")
  const navigation = useNavigate()

  const email__change = function (e) {
    setemail(e.target.value)
  }
  const password__change = function (e) {
    setpassword(e.target.value)
  }

  const submit = async function (e) {
    e.preventDefault()
    const data = await fetch("https://note-nott.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        
      },
      body: JSON.stringify({ email, password })
    })
    const user = await data.json()
    if(user.error !=null) {
      setError(user.error)
    }

    if(user.user !=null){
      setNote({...note,currentU : user})
      navigation("/space")
    }
   
  }


  // console.log(note)
  return (
    <div className='home' onSubmit={submit}>
     <Homenav/>
     {note.loaded && <p>User Informations Updated Successfully</p>}

      <div className="h">


        
        <form>

          <h1>Login</h1>
          <h3>EMAIL :</h3>
          <input type="email" placeholder='Email' name='email' value={email} onChange={email__change} />
          <h3>PASSWORD:</h3>
          <input type="password" placeholder='password' name='password' value={password} onChange={password__change} />
          <button>Login</button>


          {error && <p>{error}</p>}
        </form>

      </div>
    </div>
  )
}
