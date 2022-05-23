import './App.css';
import React , {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './Home/Home.js'
import Products from './Components/Products'
import Dashboard from './Components/Dashboard'
import Accounts from './Components/Accounts'
import Navbar from './Home/Navbar'
import Login from './Home/Login'
import Footer from './Home/Footer'
import AddProducts from './Components/Products/AddProducts'


function App(props) {
  useEffect( () => {
    if( JSON.parse(localStorage.getItem("isLoggedIn")) == null ){
      localStorage.setItem("isLoggedIn",false)
    }
  },[] ) 

  const [isLoggedIn,setIsloggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))

return(

  
    <div>
        <BrowserRouter>
        
        <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />
        
        <Routes>
            <Route path="/" element = { isLoggedIn === false ? <Login /> : <Navigate to = "/src/Home/Login" /> } />
            <Route path="/src/Components/Dashboard" element = { isLoggedIn === true ? <Dashboard /> : <Navigate to = "/" /> }  />
            <Route path="/src/Products" element ={ isLoggedIn === true ? <Products /> : <Navigate to = "/" /> } />
            <Route path="/src/Components/Accounts" element = { isLoggedIn === true ? <Accounts /> : <Navigate to = "/" /> } />
            <Route path="/src/Components/Products/AddProducts" element = { isLoggedIn === true ? <AddProducts /> : <Navigate to = "/" /> } />
            
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  
);



 /*  


  return (

<div>
      <BrowserRouter>
      <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />
      <Routes>
        <Route path = "/"  element = {<Navbar />}  />
        <Route path = "/src/Products"  element = { isLoggedIn === true ? <AddProducts /> : <Navigate to = "/" /> }  />
        <Route path = "/Products"  element = { isLoggedIn === true ? <Products /> : <Navigate to = "/" /> }  />
        <Route path = "/Navbar"  element = { isLoggedIn === true ? <Navbar /> : <Navigate to = "/" /> }  />
        <Route  path = "*" element = {<h1 style={{ textAlign : "center" }} > 404 Page not found </h1>}  />
      </Routes>
      </BrowserRouter> 
      </div>
  ); */
     

   
  
    
  
}



/* const mapStateToProps = (state) => {
  return state
}

const mapDisptachToProps = (dispatch) => {
  return {
    changeName : (name) => {  dispatch({type : "change_name" , payload : name  })  }
  }
} */

//export default connect(mapStateToProps,mapDisptachToProps)(App)

export default App;