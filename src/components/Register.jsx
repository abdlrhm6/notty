import React ,{useState} from 'react'
import './register.scss'
import { json, Link ,useNavigate } from 'react-router-dom'
import Homenav from './Homenav'

export default function Register() {


  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setEmail] = useState("")
const navigate = useNavigate()
  const username__change =function(e){
    setusername(e.target.value)
  }
  const password__change =function(e){
    setpassword(e.target.value)
  }
  const email__change =function(e){
    setEmail(e.target.value)
  }

  const submit = async function(e){
    e.preventDefault()

    const response= await fetch("https://note-nott.herokuapp.com/api/register", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({username,email,password})
    })

    const data = await response.json()
    if(data) navigate("/")

   
  }
  return (
    <div className='home' onSubmit={submit}>
        <Homenav/>
        <div className="h">
    
        <form>

        <h1>Register</h1>
        <h3>USERNAME :</h3>
        <input type="text" placeholder='username' name='username' value={username} onChange ={username__change}/>
        <h3>PASSWORD:</h3>
        <input type="password" placeholder='password' name='password' value={password} onChange ={password__change}/>
        <h3>Email :</h3>
        <input type="email" placeholder='Email' name='password' value={email} onChange ={email__change}/>
            <button>Register</button>
        </form>

        </div>
    </div>
  )
}
