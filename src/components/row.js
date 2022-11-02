import React from "react";
import Pixel from "./pixel";
import "../style/components/row.css";

function Row(props){
    const generateRow=(width)=>{
        let row=[];
        for(let i=0;i<width;i++){
            row.push(<Pixel sendTouch={props.sendTouch} key={i} x={i} y={props.height}color="white"/>)
        }
        return row;
    }
    return(
        <div className="row-body">
            {generateRow(props.width)}
        </div>
    )
}
export default Row;