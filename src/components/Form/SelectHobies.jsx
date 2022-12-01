import React, { useState } from "react";
import Select from "react-select";
import "./SelectHobies.css";

const SelectHobies = (props) => {

    const optionList = [
        { label: "Reading", value: "reading" },
        { label: "Writing", value: "writing" },
        { label: "Sports", value: "sports" },
    ];

    const handleSelect = (data) => {
        props.setSelectedOptions(data);
    };
    return (
        <div className="select">
            <Select
                options={optionList}
                placeholder="Select your hobbies"
                onChange={handleSelect}
                isSearchable={true}
                isMulti
            ></Select>

        </div>
    );
};

export default SelectHobies;