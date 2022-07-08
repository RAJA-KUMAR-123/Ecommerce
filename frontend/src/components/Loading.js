import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='loading-container' style={{minHeight:"100vh",alignItems:"centre",justifyContent:"centre",display:"flex"}}>
    <Spinner animation="grow" />
    </div>
  )
}

export default Loading;