// Rating display component

function RatingIcon ( props ) {
    return (
        <div className="rating-icon">
            <p>{props.rating}</p>
        </div>
    );
}

export default RatingIcon;