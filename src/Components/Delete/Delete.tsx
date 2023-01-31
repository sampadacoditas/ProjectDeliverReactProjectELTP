import React, { useState } from 'react'
import http from '../../Services/Services'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'


export const Delete = ({toggleModal,modal,id,url}:any) => {
  console.log(id)
  function handleButton(buttonText:any)
  {
    if(buttonText==="Yes")
    {
      console.log(id)
      const response=http.delete(`${url}${id}`)
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
