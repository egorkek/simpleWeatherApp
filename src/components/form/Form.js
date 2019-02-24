import React from 'react'
import {connect} from 'react-redux'
import checkWeather from '../../store/actions/checkWeather'
import classes from './Form.css'
class Form extends React.Component{


     onKeek= (e, key)=>{
        e.preventDefault();
        const city = e.target.elements.city.value
        // console.log(this.props.checkWeather);
         this.props.checkWeather(city, key)
         


        
        // this.props.checkWeather(city, key)

    }

    render(){


        return(
            <form className={classes.Form} onSubmit= {e=>this.onKeek(e, this.props.API_KEY)}>
                <input name='city' placeholder='enter your city.....'/>
                <button>Check weather!</button>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch){
    return{
        checkWeather: (e, API_KEY)=>dispatch(checkWeather(e, API_KEY))
    }
}

function mapStateToProps(state){
    return{
        state:state
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Form);