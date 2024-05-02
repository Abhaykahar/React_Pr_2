import React from 'react'
import "./count.css"

const Count = ({count,increment,decrement,Reset}) => {
  return (
    <div align="center" className='done'>
      <h1>
        Counter App
      </h1>
      <h2>{count}</h2>
      <button onClick={() => increment()}>+</button>
      {
        count == 0 ?(
      <button id='btn1' disabled  onClick={() => decrement()}>-</button>

        ):( 
      <button onClick={() => decrement()}>-</button>

        )
      }
      {
        count == 0 ?(
      <button id='btn2' disabled onClick={() => Reset()}>0</button>

        ):(
      <button onClick={() => Reset()}>0</button>

        )
      }
    </div>
  )
}

export default Count
