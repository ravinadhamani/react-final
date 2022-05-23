import React from 'react';
import styles from './styles.module.css'
import {Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom" 

function Index({ setIsloggedIn, isLoggedIn }) {
    let navigate = useNavigate();
    function RenderButton() {
        if (isLoggedIn === true) {
            return <button
            id={styles.login}
            onClick={() => { 
                localStorage.setItem("isLoggedIn",false)
                setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn"))) }  } > Logout </button>
        } else {
            return <button 
            id={styles.login}
            onClick={() => { 
                
                localStorage.setItem("isLoggedIn",true)
                setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))  }  } > Login </button>
        }
    }
    

    return (
        <div>

            <header id={styles.header}>
                  
            
                <h1 id={styles.admin}>PRODUCT ADMIN</h1>
                <div id={styles.headingdiv}>
                    {/* <div className={styles.active}> */}
                      <Link to="/src/Components/Dashboard" id={styles.headings}>  
                    <i id={styles.icon} class="fas fa-tachometer-alt fa-2x"></i>
                    <br></br> Dashboard</Link>  
                    
                        
                    <Link to="/src/Products" id={styles.headings}>    
                    <i id={styles.icon} class="fas fa-shopping-cart fa-2x"></i>
                    <br></br>
                        Products</Link>

                        <Link to="/src/Components/Accounts" id={styles.headings}>    
                    <i id={styles.icon} class="fas fa-user fa-2x"></i>
                    <br></br>Accounts</Link>
                       
                </div>
                <div >

                </div>
                {/* <button 
            id={styles.login}
            onClick={() => { 
                
                 navigate(`/src/Components/Dashboard`)  }  } > Login </button>
        */}
                <RenderButton />
            </header>


        </div>
    ); 
}


export default Index; 