/* eslint-disable react/display-name */
const Hoc = (Wrapper) => {
    // HOC - Higher Order Component
    // A higher-order component (HOC) is a function that takes a component and returns a new component.
    // HOCs are used to share common functionality between components without repeating code.
    // They are a pattern in React that allows you to reuse component logic.
    // HOCs are not part of the React API, but they are a pattern that emerges from React's compositional nature.
    // HOCs are often used for cross-cutting concerns such as logging, caching, authentication, and access control.
    // HOCs can be used to modify the behavior of a component, add new props, or wrap a component with additional functionality.
    // HOCs can be used to create reusable components that can be shared across different parts of an application.
    let user = {
        "id": 1,
        "name": "John"
    }
    return function(){
        return <Wrapper user={user}/>
    }
}

export default Hoc
