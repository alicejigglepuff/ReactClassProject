import { directive } from "@babel/types";
import { Component } from "react";

class CampsiteInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "campsite"
        }
    }

    render () {
        if (this.state.name) {
            return (
                <div className = "row">

                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default CampsiteInfo;