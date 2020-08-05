import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUserTie, faStar } from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";

export default function WhyUs(props) {
    const iconMapping = {
        "car": faCar,
        "driver": faUserTie,
        "star": faStar
    };
    
    return (
        <div className="WhyUs">
               <h4>{props.section}</h4>
               <div className="row">
                   <div className="col-4">
                       <FontAwesomeIcon icon={faCar} size="4x" className="icon" />
                       <p>Intelligent 4-wheel drive</p>
                    </div>
                    <div className="col-4">
                       <FontAwesomeIcon icon={faUserTie} size="4x" className="icon" />
                       <p>Experienced, professional drivers</p>
                    </div>
                    <div className="col-4">
                       <FontAwesomeIcon icon={faStar} size="4x" className="icon" />
                       <p>5 Star safety rated vehicles</p>
                    </div>
                </div>
            
        
        </div>
    )
}