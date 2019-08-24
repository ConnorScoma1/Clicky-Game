import React from "react";

const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="card-img">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
  
export default Card