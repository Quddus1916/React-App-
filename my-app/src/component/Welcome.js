import React,{Component} from 'react'
class Welcome extends Component{
    
    do(){
        alert("class btn clicked")
    }
    
    
    render(){
        return(
            <div>
                
                <h1>name:{this.props.name} Age:{this.props.age}</h1>
                <button onClick={this.do}>click here 2</button>
            </div>
        )
    }
}

export default Welcome