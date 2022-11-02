import React from "react";
import "../style/components/pixel.css";

function Pixel(props){
    const divRef=React.useRef();
    const handleTouch=(e)=>{
        e.preventDefault();
        const request={
            x:props.x,
            y:props.y,
            ref:divRef
        }
        props.sendTouch(request);

    }
    const coordinate=props.x+","+props.y;
    return(
        <div ref={divRef} onClick={handleTouch} className="pixel"key={coordinate} style={{backgroundColor:props.color}}>{props.x}/{props.y}</div>
    )
}
export default Pixel;