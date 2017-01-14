import React from "react";
import TableContainer from "./TableContainer";
import DetailView from "./DetailView";
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.asyncGetData();
    }
    render () {
    return (
        <div className="container">
            <TableContainer
                firewallBuildData={this.props.firewallBuildData}
                togglePanel={this.props.togglePanel}
                showPanel={this.props.showPanel}
                toggleModal={this.props.toggleModal}

            />
            {   this.props.showModal &&
                <DetailView
                    toggleModal={this.props.toggleModal}
                    selectedOption={this.props.selectedOption}
                />
            }
        </div>
    );
  }
}

export default Home;