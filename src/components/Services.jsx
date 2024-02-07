import React from 'react';
import { Link } from 'react-router-dom';


const Services = ({title1, title2, days, text1, text2, text3, time, classname, path}) => {
  return (
    <div className={classname}>
      <div className="services-text">
        <p className="service-title">
          <span>{title1}</span>
          <span>{title2}</span>
        </p>
        <div className="time-day">
          <span>{days}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className="icon-text-container">
        {path.map((icon, index) => (
          <Link to={icon.to} className="icon-text" key={index}>
            <img src={icon.src} alt="location_icon" width={30} height={30} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services