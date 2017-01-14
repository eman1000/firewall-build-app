import React from "react";
import * as css from "./UnitTestBox.scss";
import { Pie } from "react-chartjs";
import { ProgressBar } from "react-bootstrap";
import classnames from "classnames";
export const UnitTestBox = ({unitTest, pieData}) => {
    const statusBoxClasses = classnames({
        [css.box]: true,
        [css.boxPending]: unitTest.status === "pending",
        [css.boxComplete]: unitTest.status === "complete",
        [css.boxRunning]: unitTest.status === "running",
        [css.boxFailed]: unitTest.status === "failed"
    });
    const codeCoveredClasses = classnames({
        [css.codeCovered]: true
    });
    const progressLabel = <span className={codeCoveredClasses}>{unitTest.codeCovered}%<span>code covered</span></span>;
    return (
       <div className={statusBoxClasses}>
            <div className={`row ${css.boxHeader}`}>
                <div className="col-xs-12">
                    <h5>{unitTest.name}</h5>
                </div>
            </div>
            { unitTest.status !== "pending" &&
            <div>
                <div className={`row ${css.chartHolder}`}>
                    <div className="col-xs-6">
                        <div className={css.chart}>
                            <Pie data={pieData} options={{responsive :true}}/>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className={css.chartPercentage}>
                            {unitTest.testsPassed}%
                            <span>tests passed</span>
                        </div>
                    </div>
                </div>
                <div className={`row ${css.progress}`}>
                    <div className="col-xs-12">
                        <ProgressBar now={unitTest.codeCovered} label={progressLabel}/>
                    </div>
                </div>
            </div>
            ||
            <span>Pending</span>
            }
       </div>
    );
};
export default UnitTestBox;
