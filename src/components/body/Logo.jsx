import React from 'react';
import './Logo.css';

let Logo = () => {
    return(
        <div className = "container">
            <div>
                <a href="https://www.instagram.com/">
                <img src={require("./logo1.png")} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/">
                <img src={require("./fb4.png")} alt="instagram"/>
                </a>
                <a href="https://twitter.com/explore">
                <img src={require("./tw4.png")} alt="instagram"/>
                </a>
                <a href="https://www.google.com/">
                <img src={require("./gmail4.png")} alt="instagram"/>
                </a>
                <a href="https://github.com/">
                <img src={require("./git4.png")} alt="instagram"/>
                </a>
                <a href="https://reactjs.org/">
                <img src={require("./react4.png")} alt="instagram"/>
                </a>
            </div>
        </div>
    )
}








export default Logo;