import React from "react";

function Details(props){
  return(
    <div>
          <p className="info">{props.detailsInfo}</p>
          {/* <p className="info">{props.email}</p> */}
    </div>
  );
}

export default Details;