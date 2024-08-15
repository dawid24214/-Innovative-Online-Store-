import React from "react";
import {BrowserRouter,Outlet , Route ,Routes} from "react-router-dom";
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
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/HelpCenter' element={<HelpCenter/>} />
                    <Route path='/Products' element={<Products/>} />
                </Route>
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
