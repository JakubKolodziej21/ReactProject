import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import AuthRequired from './components/AuthRequired';
import ToDoList from './pages/ToDoList/ToDoList';
import Layout from './components/Layout';
import Albums from './pages/Albums/Albums';
import PostList from './pages/PostList/PostList';
import Pinterest from './pages/Pinterest/Pinterest';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Login />} />
      <Route element={<AuthRequired />}>
        <Route path='main' element={<Layout />}>
          <Route index element={<ToDoList />} />
          <Route path='posts' element={<PostList />} />
          <Route path='albums' element={<Albums />} />
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
