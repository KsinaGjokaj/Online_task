import React from "react";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <div >
            <div >
                <header >
                    <h2>{props.title}</h2>
                </header>
                <div >
                    <p>{props.message}</p>
                </div>
                <footer >
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </div>

        </div>
    );
};

export default ErrorModal;