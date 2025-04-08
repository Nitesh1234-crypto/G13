import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

const Counter = () => {
    let value=useSelector((store)=>store.counter.count);
    let dispatch=useDispatch()
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
