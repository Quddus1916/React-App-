import React,{Component} from 'react'
class Welcome extends Component{
    
    do(a){
        alert(a)
    }
    
    
    render(){
        return(
            <div>
                
                <h1>name:{this.props.name} Age:{this.props.age}</h1>
                <button onClick={this.do.bind(this,"parameter")}>click here 2</button>
            </div>
        )
    }
}

export default Welcome