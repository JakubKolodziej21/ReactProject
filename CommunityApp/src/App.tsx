import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
