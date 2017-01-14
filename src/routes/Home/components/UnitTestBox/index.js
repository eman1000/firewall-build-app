import React from "react";
import * as css from "./UnitTestBox.scss";
import { Pie } from "react-chartjs";
import { ProgressBar } from "react-bootstrap";
import classnames from "classnames";
export const UnitTestBox = ({data, pieData, toggleModal}) => {
    const statusBoxClasses = classnames({
        [css.box]: true,
        [css.boxPending]: data.status === "pending",
        [css.boxComplete]: data.status === "complete",
        [css.boxRunning]: data.status === "running",
        [css.boxFailed]: data.status === "failed"
    });
    const codeCoveredClasses = classnames({
        [css.codeCovered]: true
    });
    const progressLabel = <span className={codeCoveredClasses}>{data.codeCovered}%<span>code covered</span></span>;
    return (
       <div className={statusBoxClasses} onClick={toggleModal.bind(this, data.name)}>
            <div className={`row ${css.boxHeader}`}>
                <div className="col-xs-12">
                    <h5>{data.name}</h5>
                </div>
            </div>
            { data.status !== "pending" &&
            <div>
                <div className={`row ${css.chartHolder}`}>
                    <div className="col-xs-6">
                        <div className={css.chart}>
                            <Pie data={pieData} options={{responsive :true}}/>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className={css.chartPercentage}>
                            {data.testsPassed}%
                            <span>tests passed</span>
                        </div>
                    </div>
                </div>
                <div className={`row ${css.progress}`}>
                    <div className="col-xs-12">
                        <ProgressBar now={data.codeCovered} label={progressLabel}/>
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
