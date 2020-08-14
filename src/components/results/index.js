// import react & style
import React from "react";
import "./style.css";

//Like buttons, have row entries for each column name w/ MAP
function Results(props) {
    return (props.employeeRoster.map(employee =>(
        <div className="row emp" key={employee.id}>
            <div className="col entry rowentry">{employee.firstName}</div>
            <div className="col entry rowentry">{employee.lastName}</div>
            <div className="col entry rowentry">{employee.id}</div>
            <div className="col entry rowentry">{employee.position}</div>
        </div>
    )));
}

//export
export default Results