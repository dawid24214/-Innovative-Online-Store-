import { useState } from 'react'
import {BrowserRouter,Outlet , Route ,Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './jsx/Header.jsx'
import {Contact} from './jsx/Contact.jsx'
import {HelpCenter} from './jsx/HelpCenter.jsx'
import {Products} from './jsx/Products.jsx'
import './App.css'
import ReactDOM from "react-dom/client";


const Layout = () =>{
  return(
      <div className= 'App'>
        <Header/>
        <Outlet/>
      </div>
  )
}

const Router = () =>{
  return (
      <BrowserRouter>
        <Routes path ='/' element={<Layout/>}>
          <Routes path ='/contact' element = {<Contact/>} />
          <Routes path ='/HelpCenter' element = {<HelpCenter/>} />
          <Routes path ='/Products' element = {<Products/>} />
        </Routes>
      </BrowserRouter>
  )
}
const App = () => {

  return (
     <>
     <Router/>
     </>
  );
}

const rootElement = document.getElementById('root');
const root  = ReactDOM.createRoot(rootElement);
root.render(<App/>);

export default App;
