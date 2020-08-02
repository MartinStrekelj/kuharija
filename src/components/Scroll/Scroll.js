import React from 'react';
import "./Scroll.css"

// Children
const Scroll = (props) => {
    return (
        <div className="scrollPane" style={{overflowY: "scroll"}}>
            {props.children}
        </div>
    );
};

export default Scroll;