import React from 'react';
import styles from './styles.module.css'
import img from './img/avatar.png'

function Index() {

    return (
        <>

            <div>
            <div id={styles.secondbox}>
                  
                    <section id={styles.bg1}>
                        <h2 id={styles.avatorheading}>List of Accounts</h2>
                        <p id={styles.accounts}>Accounts</p><br></br>
                        <select name="category" id="category" className={styles.category}>

                            <option value="Select a category" id={styles.options} >Select account</option>
                            <option value="1">Admin</option>
                            <option value="">Editor</option>
                            <option value="">Merchant</option>
                            <option value="">Customer</option>
                        </select>
                    </section>
                        </div>
            </div>

            <div>
        
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
                            <div style={{ display: "flex" }}>

                                <p id={styles.text1}>Account Name</p><br></br>
                                <p id={styles.text2}>Account Email</p><br></br>
                            </div>
                            <div style={{ display: "flex" }}>
                                <input id={styles.textbox1} type="text" name="username"></input>
                                <input id={styles.textbox2} type="text" name="email"></input><br></br>
                            </div>


                            <div style={{ display: "flex" }}>

                                <label htmlFor="lang" id={styles.text1}>Password</label><br></br>
                                <label htmlFor="lang" id={styles.text3}>Re-enter Password</label><br></br>
                            </div>
                            <div style={{ display: "flex" }}>
                                <input id={styles.textbox1} type="password" name="password"></input><br></br>
                                <input id={styles.textbox2} type="password" name="reenter"></input><br></br>
                            </div>


                            <div style={{ display: "flex" }}>

                                <label htmlFor="lang" id={styles.text1}>Phone</label><br></br>
                                <button className={styles.button1}>Update Your Profile</button>
                            </div>
                            <input id={styles.textbox1} type="number" name="phone"></input><br></br>

                            <br></br>

                       
                        <button className={styles.button3}>Delete Your Account</button>
                        <br></br>

                        </div>


                    </div>


                </div>



            </div>
        </>
    );
}


export default Index;