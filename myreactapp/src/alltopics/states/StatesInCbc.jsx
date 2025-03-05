import { Component } from "react";

class StatesInCbc extends Component{

    state = {text: "Hiii"}; // initializing state

    updateState = () => {
        // console.log("btn clicked");
        this.setState({text: "Bye"});
    }

    render(){
        console.log(this);

        return (
            <div>
                <h1>States in Class Based comp</h1>
                <h2>{this.state.text}</h2>
                <button onClick={this.updateState}>Click me</button>
            </div>
        )
    }
}

export default StatesInCbc;