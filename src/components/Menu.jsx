import React ,{useContext}from 'react'
import './Menu.scss'
import plus from '../assets/plus.png'
import stats from '../assets/stats.png'
import exporti from '../assets/export.png'
import setting from '../assets/setting.png'
import { noteContext } from '../App'
import { Link } from 'react-router-dom'
import './Navbar'
import './Menu'

export default function Menu() {
  const {note, setNote} = useContext(noteContext)
  return (
    <div className='menu'>

      <div className="logo"><Link className='link' to ="/space">Nott.</Link></div>


      <nav>
        <div className="item" onClick={()=>setNote({...note,addM:true})}>
          <img src={plus} />
          <h3>Add Note</h3>
        </div>
        <div className="item">
          <img src={stats} />
           <Link  className='link' to="/statistics"><h3>Statistics</h3></Link>
        </div>
        <div className="item">
          <div>
          <img src={setting} />
          </div>
          <Link  className='link' to="/profile"><h3>Profile Settings</h3></Link>
        </div>
        <div className="item" onClick={()=> setNote({note : null})}>
          <img src={exporti} />
          <h3>Log Out</h3>
        </div>
      </nav>
    </div>
  )
}
