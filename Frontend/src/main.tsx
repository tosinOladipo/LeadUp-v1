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
import Members from './pages/Members/Members.tsx';
import Funnel from './pages/Funnel/Funnel.tsx';
import Lead from './pages/Lead/Lead.tsx';
import AllLeads from './pages/Lead/AllLeads.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Dashboard/>} />
      <Route path='/auth/signup' element={<Signup/>} />
      <Route path='/register' element={<SignUpUser/>} />
      <Route path='/auth' element={<Login/>} />
      <Route path='/members' element={<Members/>} />
      <Route path='/funnel' element={<Funnel/>} />
      <Route path='/new-lead/:userId/:eventId' element={<Lead/>} />
      <Route path='/leads' element={<AllLeads/>} />
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
