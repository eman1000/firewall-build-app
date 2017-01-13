import React from 'react';
import TableContainer from "./TableContainer";
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

        	/>
        </div>
    );
  }
}

export default Home;