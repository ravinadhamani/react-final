import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
//import $ from 'jquery'
import axios from 'axios'
import { useEffect, useState } from 'react'



export function App1() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data/productsPage.json').then(resp => {
            var fnData = resp.data.products

            setData([fnData])
        })

    }, [])

    if (data.length) {
        data[0].map((items) => {
            console.log(items);
        })
    }



    return (
        <>
            <div id={styles.maindiv}>
                <div>

                    <div id={styles.bg}>
                        <div id={styles.innerdiv}>


                            <div id={styles.tablesection}>

                                <div id={styles.tablewrapper}>

                                    <div id={styles.tableheaders}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className={styles.column1}><label htmlFor="selectall">
                                                    </label><input type="checkbox" name="checkbox"></input></th>
                                                    <th className={styles.column2}>Product Name</th>
                                                    <th className={styles.column3}>Unit Sold</th>
                                                    <th className={styles.column4}>In Stock</th>

                                                    <th className={styles.column5}>Expire Date</th>
                                                    <th className={styles.column6}></th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div id={styles.tabledata}>
                                        <table>
                                            <tbody id={styles.tabledata1}>
                                                {data.length ? data[0].map((data, i) => {
                                                    return (
                                                        <tr>
                                                            <td className={styles.column1}><input type="checkbox" name="checkbox" id={styles.checkboxes}></input></td>
                                                            <td className={styles.column2} key={i}>Loren Ipsum {data.name}</td>
                                                            <td className={styles.column3}>{data.unitSold}</td>
                                                            <td className={styles.column4}>{data.stock}</td>
                                                            <td className={styles.column5}>{data.expireDate}</td>
                                                            <td className={styles.column6}><input type="checkbox" name="checkbox" id={styles.checkboxesdelete}></input><i id={styles.icon} class="far fa-trash-alt deleterows"></i></td>
                                                        </tr>
                                                    )
                                                }) : null}



                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>

                            <Link to="./AddProducts" ><button className={styles.button1} >Add New Product</button></Link>
                            <br></br>


                        </div>
                        <button id={styles.deleteall1} className={styles.deleterows + '' + styles.button2}>Delete
                            Selected Products </button>

                        <section>


                            <button id={styles.sectionbutton} className={styles.button2}>Delete Selected Products</button>
                        </section>
                    </div>
                </div>


            </div>




        </>





    )
}

function Index() {

    return (
        <>

            <App1 />









        </>
    );
}

export default Index;

/* $(function () {
    $(document).on("click", ".deleterows", function () {

        var deleteRowsFromTable = $("#table-data1 input:checked").parents("tr").remove();


        console.log(deleteRowsFromTable)
    })
})

document.querySelector('button').style.display = 'none';

let main = document.getElementById('selectall')
let checkbox = document.getElementsByClassName('select'); */

/* main.onclick = () => {
    if (main.checked === true) {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
            document.querySelector('button').style.display = 'block';
        }
    }
    else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            document.querySelector('button').style.display = 'none';
        }
    } 
}*/






