import { Component } from 'react'

export default class LifeCycle extends Component {

    state = { value: 0 };

    componentDidMount(){
        console.log("Component Mounted");
    }

    componentDidUpdate(){
        console.log("Component Update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    increment = () => this.setState({value: this.state.value + 1});

    decrement = () => this.setState({value: this.state.value - 1});

    render() {
        return (
            <div>
                <h1>Learn Lifecycle in CBC {this.state.value}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}


// ComponentDidMount()
// ComponentDidUpdate()
// ComponentWillUnmount()