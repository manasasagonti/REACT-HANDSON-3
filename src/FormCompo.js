import React , {Component} from "react";
import './style.css';
class FormCompo extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            dept : '',
            rating : '',
            dataToggle : true,
            StuData : []
        }
    }
    handleChange = (event) => {
        console.log(event);
        this.setState({[event.target.name] : event.target.value})
    }
    togglevariable = () =>{
        this.setState({dataToggle : !this.state.dataToggle})
    }
    handleSubmit = () => {
        console.log(this.state);
        const tempObj = {
            name : this.state.name,
            dept : this.state.dept,
            rating : this.state.rating
        }
            this.state.StuData.push(tempObj)
            this.setState({StuData : this.state.StuData , dataToggle : !this.state.dataToggle})
            console.log(this.state.dataToggle);
        }
        goback=() => {
            this.setState({
            dataToggle:!this.state.dataToggle})
    }
    render(){
        return(
            <>
            {this.state.dataToggle  ?
          <form>
            <label>Name :</label>
            <input type="text" name="name"  onChange={this.handleChange}></input>
            <br></br>
            <label>Department :</label>
            <input type="text" name="dept"  onChange={this.handleChange}></input>
            <br></br>
            <label>Rating :</label>
            <input type="number" name="rating"  onChange={this.handleChange}></input>
            <br></br>
            <button type="button" onClick={this.handleSubmit}>submit</button>
            </form>:
            <div>
            <div style={{border:'2px solid black',borderRadius:'20px', backgroundColor: 'deepskyblue',display:'flex',gap:'20px',flexWrap:'wrap',margin:'100px 100px'}}>
                {this.state.StuData.map((item, index) => {
                    console.log(item);
                    return(
                        <div key={index} >
                            <p style={{width:'450px', borderRadius:'20px', padding:'30px',margin:'50px',border:'2px solid black',backgroundColor:'plum',textAlign:'center'}}>Name: {item.name} | Department: {item.dept} | Rating: {item.rating}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={this.goback} className="goback">Go Back</button>
        </div>
    }
             </>
        )
    }
}
export default FormCompo