import React from 'react'
import classes from './Layout.css'

const Layout = (props)=>{
    
    
    
    return(
        <div className={`${props.isDay ? classes.Day : classes.Night} ${classes.Layout}`}>
            <main>
                {props.children}
            </main>
        </div>

    )

}
export default Layout