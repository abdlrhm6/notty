import React , {useContext} from 'react'
import arrow from '../assets/arrow.png'
import profileP from '../assets/user.png'
import { noteContext } from '../App'
import './Navbar.scss'

export default function Navbar() {

  const { note, setNote } = useContext(noteContext)

  return (
    <div className='navbar'>

      <ul className="nav-item">
        
          <li className='main-li'>My Notes</li>
          <li className='main-li'>Notes History</li>
          <li className='main-li'>Export Notes</li>
          <li className='special-li main-li'> More <img src={arrow} alt="" />
          
          <ul className="mega-menu">
              <li>My Notes</li>
              <li>Notes History</li>
              <li>Export Notes</li>
              <li>Account Priviliges</li>
          </ul>
          
          </li>
        
      </ul>


      <div className="profile">

        
          <span>{note.currentU.user.username}</span>
          <img src={profileP} alt="" />
      </div>
    </div>
  )
}
