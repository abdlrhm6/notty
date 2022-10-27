import React from 'react'
import Menu from './Menu'
import Page from './Page'
import AddNote from '../modals/AddNote'
import DeleteNote from '../modals/DeleteNote'
import EditModal from '../modals/EditModal'
import { noteContext } from '../App'
import { useContext, useState } from 'react'




function Space() {

    const { note, setNote } = useContext(noteContext)

  
    return (
        <>
            
            <Menu />
            <Page />
            <AddNote />
            <DeleteNote />
            {note.updateM && <EditModal />}
            

        </>
    )
}

export default Space