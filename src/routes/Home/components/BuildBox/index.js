import React from "react";
import * as css from "./BuildBox.scss";
import classnames from "classnames";
export const BuildBox = ({build}) => {
    const statusBoxClasses = classnames({
        [css.box]: true,
        [css.boxPending]: build.status === "pending",
        [css.boxComplete]: build.status === "complete",
        [css.boxRunning]: build.status === "running",
        [css.boxFailed]: build.status === "failed"
    });
    return (
       <div className={statusBoxClasses}>
            <div className={`row ${css.boxHeader}`}>
                <div className="col-xs-12">
                    <h5>{build.name}</h5>
                </div>
            </div>
            <div className={`row ${css.imgHolder}`}>
                <div className="col-xs-6">
                    <div className={css.icon}>
                        <img src="static/icons/pc.png" />
                    </div>
                    <p>Debug</p>
                </div>
                <div className="col-xs-6">
                    <div className={css.icon}>
                        <img src="static/icons/pc.png" />
                    </div>
                </div>
                <p>Release</p>
            </div>
            <div className={`row ${css.dateTime}`}>
                <div className="col-xs-12">
                    <span>{build.time} {build.date}</span>
                </div>
            </div>
       </div>
    );
};
export default BuildBox;
