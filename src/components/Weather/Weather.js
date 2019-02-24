import React from 'react'
import classes from './Weather.css'


const Weather = (props)=>{
    console.log(props);
    

    return(
        <div className={classes.Weather}>
            <div>
                <p><span>City: </span>{props.city} ({props.country})</p>
                <p><span>Temperature: </span>{props.temperature}&deg;</p>
                <p><span>Condition: </span>{props.condition} </p>
                <p><span>Humidity: </span>{props.humidity}%</p>
            </div>
            <img src={`https:${props.image}`}/>
        </div>
    )
}
export default Weather