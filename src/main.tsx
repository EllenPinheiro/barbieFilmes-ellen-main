import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header.tsx'
import Main from './componentes/main/Main.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>,
     <Main/> 
     </>
  },
  {
    path: "/noticias",
    element: <div>Página de Notícias da Barbie</div>
  },
  {
    path: "/sobre",
    element: <div>Saiba tudo sobre a Barbie</div>
  },
  {
    path: "/contato",
    element: <div>Entre em contato conosco</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
