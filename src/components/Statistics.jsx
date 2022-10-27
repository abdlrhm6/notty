import React, { useContext , useEffect, useState} from 'react'
import Menu from './Menu'
import { noteContext } from '../App'
import AddNote from '../modals/AddNote'
import DeleteNote from '../modals/DeleteNote'
import EditModal from '../modals/EditModal'
import Navbar from './Navbar'
import moment from 'moment'

import "./stats.scss"
function Statistics() {

  const [count, setcount] = useState(0)
  const [age, setage] = useState(0)
  const { note, setNote } = useContext(noteContext)

  useEffect(() => {


    async function calc (){
        const res =await  fetch(`https://note-nott.herokuapp.com/api/calculate/${note.currentU.user._id}`)


        const data = await res.json()
        if(data) 
        setcount(data.count)
        let acc_age = note.currentU.user.createdAt.split("T")[0]

        setage(moment(acc_age , "YYYY-MM-DD").fromNow())

    }
    calc()

  }, [])
  

  return (


    <>

      <Menu />
      <AddNote />
      <DeleteNote />
      {note.updateM && <EditModal />}
      <div>
        <Navbar />


        <div className="stats">


          <h1>Latest Account Statistics</h1>


          <div className="statis">

            <div className="stati">

              <h3>Totals Created Notes</h3>
              <div>{count} Notes</div>
            </div>

            <div className="stati">
              <h3>Your Account Age in days</h3>
              <div>{age}</div>
            </div>

      


          </div>
        </div>
      </div>

    </>
  )
}

export default Statistics