import React, { useState } from 'react'
import { Button } from '../../../../Components/Button/Button'
import { Modal } from '../../../../Components/Modal/Modal'
import http from '../../../../Services/Services'

export const Delete = ({toggleModal,modal,id}:any) => {
  console.log(id)
  function handleButton(buttonText:any)
  {
    if(buttonText==="Yes")
    {
      const response=http.delete(`user/${id}`)
      console.log(response)
    }
  }
  return (
    <>
    <Modal modal={modal} setModal={toggleModal}/>
    <h1>Do you really want to delete?</h1>
    <Button buttonText={'Yes'} onClick={()=>handleButton("Yes") } />
    <Button buttonText={'No'} onClick={()=>handleButton("No") } />

    </>
  )
}
