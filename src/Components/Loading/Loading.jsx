import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='c-loading'>
        <div className='c-loading__left'>
        <img  src="./assets/piedraL.png" alt="hand rock" />
        </div>
        <div className='c-loading__right'>
        <img  src="./assets/piedraR.png" alt="hand rock" />
        </div>  
       
    </div>
  )
}

export default Loading