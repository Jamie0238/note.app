import React, { useState } from 'react'

export default function Note({ note }) {
  const [screen, setScreen] = useState(false)

  function remove() {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/notes/${note.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setScreen(true)
        }
      })
    }
  }

  if (screen === true) {
    return null
  }

  return (
    <li className='note' key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.detail}</p>
      <div className='bottom'>
        <div className='date'>{note.date}</div>
        <button>Edit</button>
        <button onClick={remove}>Delete</button>
      </div>
    </li>
  )
}
