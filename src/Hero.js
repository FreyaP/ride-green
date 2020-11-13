import React from 'react';
import "./Hero.css";
import Trees from "./images/Trees.png";



export default function Hero() {
    return (
        <div className="hero">
            
            <img src={Trees} alt="Tesla Model S" className="responsive" />   
            <h1>Hello World!</h1>
        </div>
    )
}