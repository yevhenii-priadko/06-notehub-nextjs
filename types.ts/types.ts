export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  tag: string
}

export interface ResponseNotes {
  notes: Note[]
  totalPages: number
}

export interface NoteInput {
  title: string
  content: string | null
  tag: string
}
