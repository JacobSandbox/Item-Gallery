// Card component for displaying item info
import React from "react";

function Card ( props ) {
    return (
        <div className="card" style={{backgroundImage:`url("./assets/images/${props.img}")`}}>
            <p className="card-title">{props.title}</p>
            <p className="card-desc">{props.desc}</p>
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
        />
    );
}

export default Card;
export {CreateCard};