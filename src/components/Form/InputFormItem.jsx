import React from "react";

export default (props) => {
    return <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">{props.placeholder}</span>
        <input type="text" className="form-control" onChange={props.handler}
            value={props.value}
            placeholder={"Enter " + props.placeholder}
            required={true} />

    </div>
};
