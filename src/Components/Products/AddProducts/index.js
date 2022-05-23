import React from 'react';
import styles from './styles.module.css'


function Index() {

    return (
        <>
            <div>
                <p>----------------------------------------------</p>
                <div id={styles.bg}>
                    <div id={styles.innerdiv}>
                        <h2 id={styles.welcome}>Add Product</h2>
                        <form>
                        <p id={styles.text1}>Product Name</p>
                        <input id={styles.textbox1} type="text" name="username"></input>
                        <p id={styles.text2}>Description</p>
                        <input id={styles.textbox2} type="text" name="username"></input><br></br>

                        <label htmlFor="lang" id={styles.text1}>Category</label><br></br>
                        <select name="category" id="category" className={styles.category}>

                            <option value="Select a category">Select category</option>
                            <option value="" className={styles.category1}>New Arrival</option>
                            <option value="">Most Popular</option>
                            <option value="">Trending</option>
                        </select>
                        <div id={styles.datediv}>
                            <p>Expire Date</p><br></br>
                            <p id={styles.stocks}>Units in Stock</p><br></br>
                            </div>
                            <div id={styles.dateboxes}>
                            <input id={styles.textbox3} type="text" name="username"></input>
                            <input id={styles.textbox4} type="text" name="username"></input>
                        </div>
                        <button className={styles.button1}>Add Product Now</button>
                        <br></br>
                        </form>
                        
                    </div>
                  
                    <section>

                        <label for="file-upload" id={styles.image} className={styles.customfileupload}>
                            <i id={styles.uploadicon} class="fas fa-cloud-upload"></i>
                        </label>
                        <input name='upload_cont_img' type="file" style={{ display: "none" }}></input>
                        <button id={styles.sectionbutton} className={styles.button2}>Upload Product Image</button>
                    </section>
                </div>
                
                
            </div>
            
        </>
    );
}


export default Index;