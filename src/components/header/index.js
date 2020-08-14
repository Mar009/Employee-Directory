//import react & style
import React from "react";
import "./style.css";

//header that the user will see
function Header (){
    return (
        <header className="header">
            <h2>Employee Directory</h2>
            <p>Find the employee</p>
        </header>
    );
}

//export
export default Header;