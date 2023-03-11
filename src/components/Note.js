import React from 'react'

export default function note({ note }) {
  function remove() {
    fetch(`https://localhost:3001/notes/${note.id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          console.log('삭제')
        }
      })
      .then(data => console.log(data))
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
