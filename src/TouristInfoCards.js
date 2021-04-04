import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-holder">
      <div className="card">
        <img
          className="card-img-top"
          src="https://avisassets.abgemea.com/dam/jcr:aa3b1977-80d3-4f93-a8ac-09e07feec22e/Glasgow_Squinty_Bridge_Credit_iStock_theasis.jpg"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://peoplemakeglasgow.com">
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitlondon.com">
            London
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://www.creativetourist.com/app/uploads/2016/08/Manchester-MM-WIDE.jpg"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitmanchester.com">
            Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
