import React, { useContext } from 'react';
import "./style.css";

export default function Table(props) {

    return (
        <div>
            <div className="container">
                <div>{props.firstName} {props.lastName}</div>
                <div>{props.role}</div>
                <div>{props.department}</div>
                <div>{props.sex}</div>
            </div>
        </div>

    )
};
