// Popup box for gallery app
// used for displaying full discriptions

function Popup ( props ) {
    return (
        <div id={props.id}
             className="popup"
             onMouseOut={e=>{
                    e.target.style.display="none";
                }}>
             {props.content}
        </div>
    );
}

export default Popup;