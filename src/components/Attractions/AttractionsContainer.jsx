import React from "react";
import Attractions from "./Attractions";
class AttractionsContainer extends React.Component {
    componentDidMount() {

    }
    // onPageChanged = (currentPage, pageSize) => {
    //     this.props.getUsers(currentPage, pageSize)
    // }

    render() {
        return (
            <div>
                <Attractions/>
            </div>
        )
    }
}

export default AttractionsContainer;