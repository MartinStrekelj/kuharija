import React from 'react';
import "./Scroll.css"

// Children
const Scroll = (props) => {
    return (
        <div className="scrollPane">
            {props.children}
        </div>
    );
};

export default Scroll;