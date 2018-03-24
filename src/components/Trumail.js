import React from "react";

class Trumail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.callTrumail = this.callTrumail.bind(this);
    }
    callTrumail(email) {
        const url = `https://cors.io/?https://trumail.io/json/${
            this.state.email
        }`;
        console.log(url);

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(myJson => {
                console.log(myJson);
            });
    }

    onSubmit(event) {
        event.preventDefault();
        const email = this.mailinput.value;
        if (email) {
            this.setState({ email: email }, () => {
                this.callTrumail();
            });
        } else {
            alert("Please enter your e-mail");
        }

        console.log(this.myJson);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <br />
                <br />
                <input type="e-mail" ref={input => (this.mailinput = input)} />
                <br />
                <br />
                <input type="password" name="psw" />
                <br />
                <br />
                <button type="submit">Sign Up</button>
                <br />
            </form>
        );
    }
}

export default Trumail;
