import React from 'react'

export default function note({ note }) {
  return (
    <li className='note' key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.detail}</p>
      <div className='bottom'>
        <div className='date'>{note.date}</div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  )
}
