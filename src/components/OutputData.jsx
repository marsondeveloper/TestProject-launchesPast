import React from 'react';
import './OutputData.css';


const OutputData = (props) => {

let outPutlaunches = props.launches.map(el => <div key={el.id} className='launches'>
    <h3>{"Имя миссии: " + el.mission_name}</h3>
    <p>{"Время запуска: " + el.launch_date_local.slice(11)}</p>
    <p>{"Платформа для запуска: " + el.launch_site.site_name_long}</p>
    <p>{"Название ракеты: " + el.rocket.rocket_name}</p>
    
    <div className="row"><div className="column">{el.links.flickr_images.map(im =>
  <img src={im} alt={el.rocket.rocket_name}></img>)}</div></div> 
   </div>)
   
    return (
    <div>{outPutlaunches}</div>
    )
}

export default OutputData;