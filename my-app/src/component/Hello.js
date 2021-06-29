import React from 'react'

function Hello(props){

    function Do(variable){
        alert(variable)
    }
    
    return(
        <div>
            
             <h1>Name: {props.name} Age: {props.age}</h1>
             <button onClick={Do.bind(this,"hello i am from parameter")}>click here</button>
        </div>
   )
}

export default Hello