import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Pinterest from './pages/Pinterest/Pinterest';
import Login from './pages/Login/Login';
import AuthRequired from './components/AuthRequired';
import ToDoList from './pages/ToDoList/ToDoList';
import Layout from './components/Layout';
import Albums from './pages/Albums/Albums';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>

      <Route index element={<Albums/>}/>
      <Route path='/pinterest'element={<Pinterest/>}/>

    </Route>
  ));

  return (
    <>
       <RouterProvider router={router} />  
      
      </>
    
  )
}
