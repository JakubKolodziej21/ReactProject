import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Pinterest from './pages/Pinterest/Pinterest';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Pinterest />}>
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
