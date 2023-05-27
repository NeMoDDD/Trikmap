import React from 'react'
import s from '../welcome/Welcome.module.css'
export default function Welcome() {
  return (
      <div className={s.container}>
      <div className={s.main}>
        <div className={s.title}>
        <h1>Welcome to <br></br>
          Kyrgyzstan
        </h1>
        </div>
      </div>
      </div>
  )
}
