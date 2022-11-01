import React from "react";
import"../styles/contador.css"
function Contador ({numClicks} ){
    return(
        <div className="Contador">
            {numClicks}
        </div>
    )
}
export default Contador 