import { User } from './authStore';
export const usersDB: User[] = [
  {
    id: "fkdsjflds",
    email: "graph@mail.com",
    password: "123456",
    todos:[
      {id: 'fsdfdsf', text: 'Learn Vue 3', done: true},
      {id: 'hrehwb', text: 'Learn Pinia', done: false},
      {id: 'fdsfhre', text: 'Build something awesome', done: false},
    ]
  },
  {
    "id": "ffdshdfhds",
    "email": "hops@mail.com",
    "password": "1234567",
    "todos":[]
  },
  {
    "id": "fgdfssjfldskjn",
    "email": "pops@mail.com",
    "password": "1234568",
    "todos":[]
  }
]