import { Component } from "react";

class CounterInCbc extends Component{

    state = {counter: 0};

    increment = () => {
        this.setState({counter: this.state.counter+1});
    }

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    }

    resetCounter = () => {
        this.setState({counter: 0});
    }

    render(){
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

export default CounterInCbc;