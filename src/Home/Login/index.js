//import { render } from '@testing-library/react';
import React from 'react';
import styles from './styles.module.css'


export default class Index extends React.Component {
     
    constructor() {
        
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

            input["password"] = "";

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




        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }



        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 6) {
                isValid = false;
                errors["password"] = "Please add at least 6 charachter.";
            }
        }


        this.setState({
            errors: errors
        });


        return isValid;
    }
    render() {
        return (
            <div>
                <div id={styles.bg}>
                    <div id={styles.innerdiv}>
                        <h2 id={styles.welcome}>Welcome to Dashboard, Login</h2>
                    <div>                        
                        <form className={styles.form} onSubmit={this.handleSubmit}>

                            <div>
                                <label htmlFor="username" id={styles.text1}>Username</label>
                                <input
                                    id={styles.textbox1}
                                    type="text"
                                    name="username"
                                    value={this.state.input.username}
                                    onChange={this.handleChange}

                                />

                                <div>{this.state.errors.username}</div>
                            <br></br>


                            
                                <label htmlFor="password" id={styles.text2}>Password:</label>
                                <input
                                    id={styles.textbox2}
                                    type="password"
                                    name="password"
                                    value={this.state.input.password}
                                    onChange={this.handleChange}

                                />

                                <div className="text-danger">{this.state.errors.password}</div>
                            


                            <button type="submit" value="Submit" class="btn btn-success" className={styles.button1} 
                            
                            >Login</button>
                            <button className={styles.button2}>Forgot Your Password?</button>
                            </div>
                        </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
