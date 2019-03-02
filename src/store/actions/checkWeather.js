
// export default async function checkWeather(city, key){
//     console.log(ciy);
    
//     let newData = {}
//     await fetch(`https://api.apixu.com/v1/current.json?key=${key}&q=${city}`)
//         .then(async response => await response.json())
//         .then(obj=>{
//             newData = {
//                 country: obj.location.country,
//                 city: obj.location.name,
//                 humidity: obj.current.humidity,
//                 temperature: obj.current.temp_c,
//                 condition: obj.current.condition.text,
//                 image: obj.current.condition.icon
//             }

//         })
//         console.log(newData);
//         console.log(forReducer)
        
//         return async (dispatch)=>{

//           dispatch(forReducer(newData))

//         }
        
    
// }

// function forReducer(newData){
//     return{
//         type:'ADD_WEATHER',
//         payload: newData
//     }
// }



export default function checkWeather(city, key){
    return async dispatch =>{
        let newData = {}
        await fetch(`https://api.apixu.com/v1/current.json?key=${key}&q=${city}`)
            .then(async res=> await res.json())
            .then(obj=>{
                
                
                newData={
                country: obj.location.country,
                city: obj.location.name,
                humidity: obj.current.humidity,
                temperature: obj.current.temp_c,
                condition: obj.current.condition.text,
                image: obj.current.condition.icon,
                isDay: obj.current.is_day,

                err: undefined
            }

            }
            ).catch(err=>{
                newData={
                    
                    err:'smth wrong'
                }
                alert(newData.err)
            });

        
        dispatch(forReducer(newData))
    }
    
        
    
}

function forReducer(newData){
    return{
        type:'ADD_WEATHER',
        payload: newData
    }
}