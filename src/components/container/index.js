//import react
import React from "react";
//return props fluid
function Container(props){
    return <div className={`container${props.fluid} ? "-fluid": ""}`} {...props} />
}


//export
export default Container;