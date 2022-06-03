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

export class App1 extends React.Component{
  constructor()
  {
    super();
    this.state={
      name: null
    }
  }
componentDidMount()
{

  const findAnyName = async() => {
    const res1 = ['https://reactmusicplayer-ab9e4.firebaseio.com/project-data/accountsPage.json'];
      try{
        let res = await Promise.all(res1.map(e => fetch(e)))
        let resJson = await Promise.all(res.map(e => e.json()))
        resJson = resJson.map(e => e.Admin.email)
        console.log(resJson)
      }catch(err) {
        console.log(err)
      }
    }
    findAnyName()
  /*   Promise.all([
      fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json').then(value => value.json())
     
      ])
      
      .then((value) => {
        console.log(value)
       //json response
     })
      .catch((err) => {
          console.log(err);
      }); */

}

render(){
    return (
<div>

</div>
    )
  }
}
function App(props) {
  useEffect( () => {
    if( JSON.parse(localStorage.getItem("isLoggedIn")) == null ){
      localStorage.setItem("isLoggedIn",false)
    }
  },[] ) 

  const [isLoggedIn,setIsloggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))

return(

  
    <div>
      <App1/>
        <BrowserRouter>
        
        <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />
        
      
        <Routes>
            <Route path="/" element = { isLoggedIn === false ? <Login /> : <Navigate to = "/src/Components/Dashboard" /> } />
            <Route path="/src/Home/" element = { isLoggedIn === true ? <Dashboard /> : <Navigate to = "/src/Components/Dashboard" /> } />
            <Route path="/src/Components/Dashboard" element = { isLoggedIn === true ? <Dashboard /> : <Navigate to = "/" /> }  />
            <Route path="/src/Products" element ={ isLoggedIn === true ? <Products /> : <Navigate to = "/" /> } />
            <Route path="/src/Components/Accounts" element = { isLoggedIn === true ? <Accounts /> : <Navigate to = "/" /> } />
            
        </Routes>
        </BrowserRouter>
        <Footer/>
        
    </div>
  
);   
  
} 
  


export default App;