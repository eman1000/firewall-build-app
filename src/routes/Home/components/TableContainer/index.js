import React from "react";
import * as css from "./TableContainer.scss";
import { Panel } from "react-bootstrap";
import MetricsBox from "../MetricsBox";
import BuildBox from "../BuildBox";
import classnames from "classnames";

export const TableContainer = ({firewallBuildData, showPanel, togglePanel}) => {
    function getHeaderClasses(state){
        const headerClasses = classnames({
            "container":true,
            [css.stateColorGrey] : state === "pending",
            [css.stateColorBlue] : state === "running",
            [css.stateColorRed] : state === "rejected",
            [css.stateColorGreen] : (state === "accepted") || (state === "complete")
        });
        return headerClasses;
    }
    function getLinkActiveClasses(panelOpen){
        const activeLink = classnames({
            [css.rowId] : true,
            [css.active]: panelOpen
        });
        return activeLink;
    }
    function getGetBoxesClasses(value, panelOpen){
        const statusBoxClasses = classnames({
            [css.statusBox]: true,
            [css.pending]: value === "pending",
            [css.running]: value === "running",
            [css.complete]: value === "complete",
            [css.failed]: value === "failed",
            [css.hide] : panelOpen
        });
        return statusBoxClasses;
    }
    const stateIconsMap = {
        pending:"static/icons/build_pending.png",
        running:"static/icons/firewall_running.png",
        rejected:"static/icons/firewall_rejected.png",
        complete:"static/icons/build_complete.png",
        accepted:"static/icons/firewall_accepted.png"
    };
    function getFireWallBuilds() {
        return (
            <div className={`row ${css.content}`}>
                {   firewallBuildData.map((obj, index)=>{
                    let { metrics, build, unitTest, functionalTest } = obj || {};
                        return (
                            <div key={index} className={getHeaderClasses(obj.state )}>
                                <div onClick={togglePanel.bind(this, {"key":"panel" + index, value:!showPanel["panel" + index]})} className={`row ${css.panelHeader}`}>
                                    <div className="col-xs-3">
                                        <span className={css.icon}><img src={stateIconsMap[obj.state]} alt=""/></span>
                                        <span className={getLinkActiveClasses(showPanel["panel" + index])}>{obj.id}</span>
                                    </div>
                                    <div className="col-xs-1">
                                        <span>{obj.owner}</span>
                                    </div>
                                    <div className="col-xs-2">
                                        <span>{ obj.timeStarted.date} {obj.timeStarted.time}</span>
                                    </div>
                                    <div className="col-xs-1">
                                        <span className={css.state}>{obj.state}</span>
                                    </div>
                                    <div className="col-xs-1">
                                        <span className={getGetBoxesClasses(metrics.status, showPanel["panel" + index])}/>
                                    </div>
                                    <div className="col-xs-1">
                                        <span className={getGetBoxesClasses(build.status, showPanel["panel" + index])}/>
                                    </div>
                                    <div className="col-xs-1">
                                        <span className={getGetBoxesClasses(unitTest.status, showPanel["panel" + index])}/>
                                    </div>
                                    <div className="col-xs-2">
                                        <span className={getGetBoxesClasses(functionalTest.status, showPanel["panel" + index])}/>
                                    </div>
                                </div>
                                <Panel className="row" collapsible expanded={showPanel["panel" + index]}>
                                    <div className={`col-xs-12 col-sm-6 col-md-3`}>
                                        <MetricsBox metrics={obj.metrics || {}}/>
                                    </div>
                                    <div className={`col-xs-12 col-sm-6 col-md-3 `}>
                                        <BuildBox build={obj.build || {}}/>
                                    </div>
                                    <div className={`col-xs-12 col-sm-6 col-md-3`}>
                                     dcddc
                                    </div>
                                    <div className={`col-xs-12 col-sm-6 col-md-3`}>
                                    dcdcd
                                    </div>

                                </Panel>
                            </div>
                        );

                    })
                }
            </div>
        );
    }
    return (
        <div className="row">
            <div className="col-xs-12">
            <h1>Firewall / Build App</h1>
            <div className={`row ${css.tableHolder}`}>
                <div className="col-xs-3">
                    Changelist / Build
                </div>
                <div className="col-xs-1">
                    Owner
                </div>
                <div className="col-xs-2">
                    Time Start
                </div>
                <div className="col-xs-1">
                    State
                </div>
                <div className="col-xs-1">
                    Matrics
                </div>
                <div className="col-xs-1">
                    Build
                </div>
                <div className="col-xs-1">
                    Unit Test
                </div>
                <div className="col-xs-2">
                    Functional Test
                </div>
            </div>
            {getFireWallBuilds()}
            </div>       
        </div>
    );
};
export default TableContainer;