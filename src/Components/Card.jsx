// Card component for displaying item info
import React from "react";
import RatingIcon from "./RatingIcon";

function Card ( props ) {
    return (
        <div className="card" style={{backgroundImage:`url("./assets/images/${props.img}")`}}>
            <RatingIcon rating={props.rating}/>
            <p className="card-title">{props.title}</p>
            <div className="card-desc">
                <p>{props.desc}</p>
                <div>i</div>
            </div>
        </div>
    );
}

function CreateCard ( item ) {
    return (
        <Card 
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            rating={item.rating}
        />
    );
}

export default Card;
export {CreateCard};