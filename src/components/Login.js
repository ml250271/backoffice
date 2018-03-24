import React from "react";
import Trumail from "./Trumail";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onSubmitButton(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <p>E-mail</p>
                <Trumail />
            </div>
        );
    }
}

export default Login;
