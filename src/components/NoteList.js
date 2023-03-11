import { useEffect, useState } from 'react'
import Note from './Note'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
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
