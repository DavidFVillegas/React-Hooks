import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Comentarios from "./components/Comentarios"
import Photos from "./components/Photos"
import Post from "./components/Post"
import Todos from "./components/Todos"
import Users from "./components/Users"

const router = createBrowserRouter([
  { // El path por default
    path: '/',
    element: <h1>Home</h1>
  },
  { // El path es la ruta especifica en el url
    path: '/comentarios',
    element: <Comentarios />
  },
  {
    path: '/photos',
    element: <Photos />
  },
  {
    path: '/post',
    element: <Post />
  },
  {
    path: '/todos',
    element: <Todos />
  },
  {
    path: '/users',
    element: <Users />
  },
  
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
