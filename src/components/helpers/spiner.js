import {Spin} from "antd";

const Spiner = (isFetching) => {
    return (
        <div>
            {isFetching ? <Spin/> : null}
        </div>
    )
}

export default Spiner