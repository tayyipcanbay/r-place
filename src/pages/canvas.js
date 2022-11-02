import React, { useEffect } from "react";
import Row from "../components/row";
import "../style/pages/canvas.css";
import ColorPicker from "../components/colorPicker";

function Canvas(){
    const [color,setColor]=React.useState("red");
    useEffect(()=>{
        console.log("color changed to :"+color);
    },[color]);

    const generateCanvas=(width,height)=>{
        let rows=[];
        for(let i=0;i<height;i++){
            rows.push(<Row sendTouch={sendTouch} key={i} height={i} width={width}/>)
        }
        return rows;
    }
    const sendTouch=(request)=>{
        console.log("touch on ");
        console.log(request);
        confirmTouch(request);
    }
    const confirmTouch=(request)=>{
        request.ref.current.style.backgroundColor=color;
    }
    return(
        <div className="canvas-body">
            {generateCanvas(19,19)}
            <ColorPicker setColor={setColor}/>
        </div>
    )
}
export default Canvas;