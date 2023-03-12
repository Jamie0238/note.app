import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/ko'

export default function Note({ note }) {
  console.log(note.date.toDate())

  const dt = note.date.toDate()
  const date = moment(dt).format('YYYY년 MMMM Do hh:mm:ss')

  function remove() {}

  return (
    <li className='note' key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.detail}</p>
      <div className='bottom'>
        {<div className='date'>{date}</div>}

        <Link to={'/edit'} state={note}>
          <button>Edit</button>
        </Link>

        <button onClick={remove}>Delete</button>
      </div>
    </li>
  )
}
