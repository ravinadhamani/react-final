import React from 'react';
import styles from './styles.module.css'
import img from './img/avatar.png'

function Index() {

    return (
        <>
            <div>
                <p>----------------------------------------------</p>
                <div id={styles.secondbox}>
                    <section id={styles.bg3}>
                        <h2 id={styles.avatorheading}>Change Avator</h2>
                        <img src={img} id={styles.image} alt="images" /> 
                        <input name='upload_cont_img' type="file" style={{ display: "none" }}></input>
                        <button id={styles.sectionbutton} className={styles.button2}>Upload New Photo</button>
                    </section>
                    <div id={styles.bg}>
                        <div id={styles.innerdiv}>
                        <h2 id={styles.welcome}>Account Settings</h2>
                        <div style={{display: "flex"}}>

                            <p id={styles.text1}>Account Name</p><br></br>
                            <p id={styles.text2}>Account Email</p><br></br>
                        </div>
                        <div style={{display: "flex"}}>
                            <input id={styles.textbox1} type="text" name="username"></input>
                            <input id={styles.textbox1} type="text" name="email"></input><br></br>
                        </div>
                        

                        <div style={{display: "flex"}}>
                           
                            <label htmlFor="lang" id={styles.text1}>Password</label><br></br>
                            <label htmlFor="lang" id={styles.text1}>Phone</label><br></br>
                        </div> 
                        <div style={{display: "flex"}}>
                            <input id={styles.textbox1} type="password" name="password"></input><br></br>
                            <input id={styles.textbox1} type="number" name="phone"></input><br></br>
                        </div> 
                        

                        <div style={{display: "flex"}}>

                            <label htmlFor="lang" id={styles.text1}>Re-enter Password</label><br></br>
                            <button className={styles.button1}>Update Your Profile</button>
                        </div>
                        <input id={styles.textbox1} type="password" name="password"></input><br></br>
                      
                            <br></br>
                            

                            </div>

                            <button className={styles.button2}>Delete Your Account</button>
                            <br></br>


                        
                    </div>

                </div>
            

            </div>
        </>
    );
}


export default Index;