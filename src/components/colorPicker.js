import React, { useEffect } from "react";
import "../style/components/colorPicker.css";

function ColorPicker(props){
    const setColor=(e)=>{
        console.log(e.target.style["background-color"]);
        props.setColor(e.target.style["background-color"]);
    }
    return(
        <div className="color-picker-body">
            <div className="color-picker">
                <div className="color-option" >
                    <div className="color-option-inner">
                        <div onClick={setColor} className="color-option-inner-color" style={{backgroundColor:"red"}}>
                        </div>
                    </div>
                    <div className="color-option-inner">
                        <div onClick={setColor} className="color-option-inner-color" style={{backgroundColor:"blue"}}>
                        </div>
                    </div>
                    <div className="color-option-inner">
                        <div onClick={setColor} className="color-option-inner-color" style={{backgroundColor:"orange"}}>
                        </div>
                    </div>
                    <div className="color-option-inner">
                        <div onClick={setColor} className="color-option-inner-color" style={{backgroundColor:"purple"}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ColorPicker;