import React from "react";
import "./Whistler.css";

export default function Whistler() {
    return (
        <div className="Whistler">
        <h2>Explore the Sea to Sky </h2>
        <iframe title="S2SMap" className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d659916.739121393!2d-123.217386446875!3d49.75221131503595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1597465016420!5m2!1sen!2sca" width="800" height="400" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
}