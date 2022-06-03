import React from 'react';
import styles from './styles.module.css'

export default class Index extends React.Component {

    constructor() {

        super();
        this.state = {
            input: {},
            errors: {},

        };



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    // handle change event of input file and validate it
    onChangeFile = event => {
        let errors = {};
        const image = event.target.files[0];
        if (!image) {
            alert('please upload image');
            return false;
        }
        if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert('please enter image with jgp/jpeg/png/gif');
            return false;
        }
        if (image.size>1000000) {
            alert('please enter image less than 1MB');
            return false;
        }

        else{
        alert('image uploaded successfully')
        console.log('event.target.files[0]', image, image.size)
    }

        this.setState({
            errors: errors
        });
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });

    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["username"] = "";

            input["description"] = "";
            input["image"] = "";

            this.setState({ input: input });

            alert(' Form is submitted');
        }


    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;


        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (typeof input["username"] !== "undefined") {
            const re = /^\S*$/;
            if (input["username"].length < 6 || !re.test(input["username"])) {
                isValid = false;
                errors["username"] = "Please enter valid username.";
                console.log(isValid)
            }
        }

        if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please enter your description.";
        }

        if (typeof input["description"] !== "undefined") {
            const re = /^\S*$/;
            if (input["description"].length < 100 || !re.test(input["description"])) {
                isValid = false;
                errors["description"] = "Please enter valid description.";
                console.log(isValid)
            }
        }



        this.setState({
            errors: errors
        });


        return isValid;


    }


    render() {
        return (
            <>
                <div>
                    <div id={styles.bg}>
                        <div id={styles.innerdiv}>
                            <h2 id={styles.welcome}>Add Product</h2>
                            <form className={styles.form} onSubmit={this.handleSubmit}>

                                <label htmlFor="password" id={styles.text1}>Product Name</label>
                                <input id={styles.textbox1} type="text" name="username"
                                    value={this.state.input.username}
                                    onChange={this.handleChange}></input>
                                <div>{this.state.errors.username}</div>
                                <br></br>

                                <label htmlFor="password" id={styles.text2}>Description</label>
                                <input id={styles.textbox2} type="text" name="description"
                                    value={this.state.input.description}
                                    onChange={this.handleChange}></input><br></br>

                                <div>{this.state.errors.description}</div>
                                <br></br>

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



                                <button type="submit" value="Submit" class="btn btn-success" className={styles.button1}>Add Product Now</button>
                                <br></br>
                            </form>

                        </div>

                        <section>


                            

                            <input type="file" id="file" style={{ display: "none" }}
                                onChange={(e) => this.onChangeFile(e)} />
                            <label htmlFor="file" id={styles.image} className={styles.customfileupload}>
                                <span  id={styles.uploadicon} className='fas fa-cloud-upload'> </span>
                            </label>

                            <button id={styles.sectionbutton} className={styles.button2}>Upload Product Image</button>

                        </section>

                    </div>




                </div>

            </>
        );
    }
}