import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Pinterest from './pages/Pinterest/Pinterest';
import Login from './pages/Login/Login';
import AuthRequired from './components/AuthRequired';
import ToDoList from './pages/ToDoList/ToDoList';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />

      <Route element={<AuthRequired />}>
        <Route path='main' element={<ToDoList />} />
        <Route path='pinterest' element={<Pinterest />} />
      </Route>
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
