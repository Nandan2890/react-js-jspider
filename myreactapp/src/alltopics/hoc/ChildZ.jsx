/* eslint-disable react-refresh/only-export-components */
import Hoc from "./Hoc"

const ChildZ = (x) => {

    console.log(x)
    return (
        <div>
            <h1>ChildZ component</h1>
        </div>
    )
}

export default Hoc(ChildZ)
