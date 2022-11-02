import React from "react";
import "../style/pages/welcome.css";
function Welcome(){
    const animateScroll=()=>{
        console.log("Çalıştım")
    }
    const handleTouch=(e)=>{
        e.preventDefault();
        console.log("Çalıştım")
        alert("Çalıştım")
    }
    return(
        <div className="welcome-body">
            <div onScroll={animateScroll} className="welcome-head">
               <div>
                    <h1>Welcome to R-Place</h1>
                    <p>Scroll for more...</p>
               </div>
            </div>
            <div className="touch-demo" onClick={handleTouch}>
                Touch me
            </div>
        </div>
        
        
    )
}
export default Welcome;