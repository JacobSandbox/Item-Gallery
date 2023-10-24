// Card component for displaying item info
import React from "react";
import RatingIcon from "./RatingIcon";
import Popup from "./Popup";

function Card ( props ) {
    return (
        <div className="card-container">
            <div className="card" style={{backgroundImage:`url("./assets/images/${props.img}")`}}>
                <RatingIcon rating={props.rating}/>
                <p className="card-title">{props.title}</p>
                <div className="card-desc">
                    <p>{props.desc}</p>
                    <div onClick={(e)=>{
                        document.getElementById(""+props.id).style.display = "block";
                        let o = document.getElementById("overlay");
                        if ( o ) o.style.display = "block";
                    }}>
                    i
                    </div>
                </div>
            </div>
            <Popup id={props.id} content={props.desc} />
        </div>
    );
}

function CreateCard ( item ) {
    return (
        <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            rating={item.rating}
        />
    );
}

export default Card;
export {CreateCard};