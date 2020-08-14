//import react & style
import React from "react";
import  "./style.css";


//function for the button to sort by elements
function Buttons (props){
    return (
        <div>
            <div className = "row buttonrow">
                <div className= "col"></div>
                <div className= "col"><button className="card-btn" onClick={props.sort}>Search by First Name</button></div>
                <div className= "col"><button className="card-btn" onClick={props.sort}>Search by Last Name</button></div>
                <div className= "col"><button className="card-btn" onClick={props.sort}>Search by Position</button></div>
                <div className= "col"><button className="card-btn" onClick={props.sort}>Search by Id</button></div>
            </div>
        </div>
    );
}

//export
export default Buttons;