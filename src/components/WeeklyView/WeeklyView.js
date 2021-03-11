import React, {Component} from "react";

class weeklyView extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // a helpful tool, look in the console to see the structure of the info and how to reach it


    }

    render() {
        return(
            <main id="weeklyview">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            1
                        </div>
                        <div className="col-md">
                            2
                        </div>
                        <div className="col-md">
                            3
                        </div>
                        <div className="col-md">
                            4
                        </div>
                        <div className="col-md">
                            5
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default weeklyView