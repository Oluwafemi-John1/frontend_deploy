import { Component } from "react";

class Classbased extends Component {
    constructor(props) {
        super(props);
        this.school = "Soft Quest Incorporated";
    }
    state = { myNumber:34 }
    // myNumber = 34
    increase = () => {
        console.log(this.state.myNumber);
        this.setState({myNumber: this.state.myNumber-1})
    }
    render() { 
        return ( 
            <>
                <h1>Hello world! I am a student of {this.school}</h1>
                <h1>This is {this.state.myNumber}</h1>
                <button onClick={this.increase}>Increase</button>
            </>
         );
    }
}
 
export default Classbased;