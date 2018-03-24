import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.callTrumail = this.callTrumail.bind(this);
    }
    onSubmitButton(event) {
        event.preventDefault();
    }
    callTrumail() {
        const url = `https://cors.io/?https://trumail.io/json/${
            this.props.email
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

    componentDidMount() {
        this.callTrumail();
    }
    render() {
        return <input type="button" value={buttVall} />;
    }
}

export default Button;
