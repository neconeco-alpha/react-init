// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counter/counterSlice'
// import styles from './Counter.module.css'

import { useAppSelector, useAppDispatch } from './store/hooks'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}