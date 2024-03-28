import React from "react";

const Header = (props) => {

    console.log("Rendering header");

    return <div>{props.title}</div>;

};

export default React.memo(Header);