import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUserTie, faStar, faWifi, faBinoculars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";

export default function WhyUs(props) {
    
    return (
        <div className="WhyUs row">
            <div className="col-6">
               <h4>Safety</h4>
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
            <div className="col-6">
               <h4>Guest Experience</h4>
               <div className="row">
                   <div className="col-4">
                       <FontAwesomeIcon icon={faWifi} size="4x" className="icon" />
                       <p>Complimentary onboard wifi and devices</p>
                    </div>
                    <div className="col-4">
                       <FontAwesomeIcon icon={faBinoculars} size="4x" className="icon" />
                       <p>Optional add ons for sightseeing or convenience</p>
                    </div>
                    <div className="col-4">
                       <FontAwesomeIcon icon={faShoppingBag} size="4x" className="icon" />
                       <p>5 Star safety rated vehicles</p>
                    </div>
                </div>
            </div>
        </div>
    )
}