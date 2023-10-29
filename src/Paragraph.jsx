import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Paragraph({ paras }) {
  //   console.log(paras)
  return (
    <div className="lorem-text">
      {paras.map((item, index) => {
        return <p key={nanoid()}>{item}</p>
      })}
    </div>
  )
}
