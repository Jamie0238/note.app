import { useEffect, useState } from 'react'
import db from '../db/data.json'
import Note from './Note'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(db.notes)
  }, []) //useEffect: 최초 실행되는 함수

  console.log(notes)

  return (
    <ul className='list'>
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  )
}
