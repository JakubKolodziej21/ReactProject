import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Pinterest from './pages/Pinterest/Pinterest';
import Login from './pages/Login/Login';
// import PostList from './pages/PostList/PostList';
import AuthRequired from './components/AuthRequired';
import ToDoList from './pages/ToDoList/ToDoList';
import Layout from './components/Layout';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />

      <Route element={<AuthRequired />}>
        <Route path='main' element={<Layout />}>
          <Route index element={<ToDoList />} />
          <Route path='pinterest' element={<Pinterest />} />
        </Route>
      </Route>
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}
