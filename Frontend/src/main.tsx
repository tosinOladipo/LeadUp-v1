import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import store from './store';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Signup from './pages/Auth/Signup.tsx';
import Login from './pages/Auth/Login.tsx';
import SignUpUser from './pages/Auth/SignUpUser.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Dashboard/>} />
      <Route path='/auth/signup' element={<Signup/>} />
      <Route path='/register' element={<SignUpUser/>} />
      <Route path='/auth' element={<Login/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
