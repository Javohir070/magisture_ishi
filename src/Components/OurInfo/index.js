import React from "react";
import { planCardData } from "../../Mock/info-univer";

import PlanCard from "../PlanCard";

import "./style.css";

function OurPlans() {
  return (
    <div className="our-plans">
      <div className="container">
        <div className="row">
          {planCardData &&
            planCardData.map((item, index) => {
              return (
                <div
                  className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                  key={index}
                >
                    <PlanCard planData={item} />
                  
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default OurPlans;
