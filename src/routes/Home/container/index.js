import { connect } from "react-redux";
import {} from "../module";
import Home from "../components/Home";
import {
    asyncGetData,
    togglePanel,
    toggleModal
} from "../module";

const mapStateToProps = (state) => ({
    firewallBuildData:state.home.firewallBuildData || [],
    showPanel:state.home.showPanel || {},
    showModal:state.home.showModal,
    selectedOption:state.home.selectedOption

});

const mapDispatchToProps = {
    asyncGetData,
    togglePanel,
    toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
