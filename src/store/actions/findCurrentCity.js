import axios from 'axios'
export default function findCurrentCity(){
    return (dispatch, getStore)=>{
        
        navigator.geolocation.getCurrentPosition(
        (suc)=>{
            const latitude = suc.coords.latitude.toFixed(3);
            const longitude = suc.coords.longitude.toFixed(3);
            axios.get(`http://api.apixu.com/v1/current.json?key=7f9b040ad7eb40c7bab203110192302&q=${latitude} ${longitude}`)
            .then(res=>{
                
                
                const newData={
                        country: res.data.location.country,
                        city: res.data.location.region,
                        humidity: res.data.current.humidity,
                        temperature: res.data.current.temp_c,
                        condition: res.data.current.condition.text,
                        image: res.data.current.condition.icon,
                        isDay: res.data.current.is_day,
                        err: undefined
                }
                dispatch(forReducer(newData))

                
                
            })

            
          
        },
        err=>{
          console.log(err);
          
        }
      );
      
      
      
    }

      
}

function forReducer(data){
    return{
        type: 'FIND_CURRENT_CITY',
        payload: data

    }
}