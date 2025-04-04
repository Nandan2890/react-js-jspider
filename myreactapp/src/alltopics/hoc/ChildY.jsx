/* eslint-disable react-refresh/only-export-components */
import ChildZ from "./ChildZ"
import Hoc from "./Hoc"

const ChildY = (y) => {

    console.log(y)
    return (
        <div>
            <h1>ChildY  component</h1>
            <ChildZ />
        </div>
    )
}

export default Hoc(ChildY)