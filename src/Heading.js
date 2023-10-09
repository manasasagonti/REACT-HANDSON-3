import { Component } from "react";
import './style.css';
class Heading extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
        
            </>
        )
    }
}
export default Heading;