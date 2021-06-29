import React from 'react'

function Hello(props){

    function Do(){
        alert("button clicked")
    }
    
    return(
        <div>
            
             <h1>Name: {props.name} Age: {props.age}</h1>
             <button onClick={Do}>click here</button>
        </div>
   )
}

export default Hello