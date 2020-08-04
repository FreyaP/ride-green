import React from "react";
import "./WhyUs.css";

export default function WhyUs() {
    return (
        <div className="row WhyUs">
           <div className="col-6">
               <h4>Safety</h4>
               <div className="row">
               <ul>
                   <li>
                       Intelligent 4 wheel drive system
                   </li>
                   <li>
                       Experienced, professional and knowledgables drivers
                   </li>
                   <li>
                       Brand new 5 star safety rating on all vehicles
                   </li>
               </ul>
               </div>
            </div> 
            <div className="col-6">

              <h4> Guest Experience </h4>
              <ul>
                  <li>
                    On board wifi
                  </li>
                  <li>
                      Ipads and charging ports
                  </li>
                  <li>
                      Comfort Amenities
                  </li>
                  <li>
                      Door to door service with optional tour or convenience stops
                  </li>
              </ul>
            </div>
        
        </div>
    )
}