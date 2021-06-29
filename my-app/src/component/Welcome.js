import React,{Component} from 'react'
class Welcome extends Component{
    render(){
        return(<h1>name:{this.props.name} Age:{this.props.age}</h1>)
    }
}

export default Welcome