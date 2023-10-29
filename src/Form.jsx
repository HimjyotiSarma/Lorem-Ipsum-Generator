// import React from 'react'

// import { useState } from 'react'

export default function Form({ handleCount, count, handleParagraph }) {
  return (
    <form className="lorem-form">
      <label htmlFor="para">Paragraph:</label>
      <input
        type="number"
        name="para"
        id="para"
        min="1"
        max="8"
        value={count}
        onChange={handleCount}
      />
      <button type="button" className="btn" onClick={handleParagraph}>
        GENERATE
      </button>
    </form>
  )
}
