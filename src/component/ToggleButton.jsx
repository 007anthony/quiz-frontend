import {useState } from "react";

function ToggleButton(props) {


    const onClick = (e) => {
        props.onClick(e);
    }

    


    return(
        <div className={`ToggleButton ${props.isRight != null? props.isRight? 'right': 'wrong': null}`} onClick={onClick}><div className={props.selected? "selected": ""}></div> <span>{props.value}</span></div>
    );
}

export default ToggleButton;