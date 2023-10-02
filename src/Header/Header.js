import React from "react";
import "./Header.css"
import Navigation from "../Navigation/Navigation";

function Header(){
    return (
        <div className="title">
            <p>Izzuan</p>
           <p><Navigation/></p> 
        </div>
    );
}

export default Header;