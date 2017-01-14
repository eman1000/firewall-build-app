import { connect } from "react-redux";
import {} from "../module";
import Home from "../components/Home";
import {
    asyncGetData,
    togglePanel
} from "../module";

const mapStateToProps = (state) => ({
    firewallBuildData:state.home.firewallBuildData || [],
    showPanel:state.home.showPanel || {}

});

const mapDispatchToProps = {
    asyncGetData,
    togglePanel
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
