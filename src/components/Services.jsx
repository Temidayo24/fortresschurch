import React from 'react';


const Services = ({title, days, text1, text2, text3, time, classname, path}) => {
  return (
    <div className={classname}>
      <div className='services-text'>
        <p className='service-title'>{title}</p>
        <span>{days}</span>
        <span>Time: {time}</span>
      </div>
      <div className="icon-text-container">
        {path.map((icon, index) => (
           <div className="icon-text" key={index}>
            <img src={icon} alt="location_icon" width={20} height={20} />
            <span>{text1}</span>
          </div>
         )
        )}
        {/* <div className="icon-text">
          <img src={map} alt="location_icon" width={20} height={20} />
          <span>{text1}</span>
        </div>
        <div className="icon-text">
          <img src={YT} alt="youtube_icon" width={20} height={20} />
          <span>{text2}</span>
        </div>
        <div className="icon-text">
          <img src={mixlr} alt="mixlr_icon" width={20} height={20} />
          <span>{text3}</span>
        </div> */}
      </div>
    </div>
  );
}

export default Services