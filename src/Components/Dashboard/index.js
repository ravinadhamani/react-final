import React from 'react';
import styles from './styles.module.css'



function Index() {

    return ( 
      
        <>
        
            <div>
            <p>----------------------------------------------</p>
            <h2 id={styles.welcome}>Welcome back, <b>Admin</b></h2>
                <div id={styles.col1div}>
                <div id={styles.bg}>
                    
                        <h3 id={styles.latesthits}>Latest Hits</h3>
                       {/*  <div id="chart">
                        </div> */}
                    
                </div>
                <div id={styles.bg2}>
                    
                    <h3 id={styles.latesthits}>Performance</h3>
                    
                </div>
                </div>
                

            </div>
        </>
    );
}


export default Index; 