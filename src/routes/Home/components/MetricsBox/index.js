import React from "react";
import * as css from "./MetricsBox.scss";
import classnames from "classnames";
export const MetricsBox = ({metrics, toggleModal}) => {
    const statusBoxClasses = classnames({
        [css.box]: true,
        [css.boxPending]: metrics.status === "pending",
        [css.boxComplete]: metrics.status === "complete",
        [css.boxRunning]: metrics.status === "running",
        [css.boxFailed]: metrics.status === "failed"
    });
    function getArrowImages(value){
        const increaseArrow = "static/icons/increase_arrow.svg";
        const decreaseArrow = "static/icons/decrease_arrow.svg";
        const pendingArrow = "static/icons/pending_arrow.svg";

        let arrow = "";
        if ( value > 0 ){
            arrow = increaseArrow;
            return arrow;
        }
        else if (value < 0) {
            arrow = decreaseArrow;
            return arrow;
        }
        else {
            arrow = pendingArrow;
            return arrow;
        }
    }
    function getLowerArrowImages(value){
        const pendingArrow = "static/icons/pending_arrow.svg";
        const yellowArrow = "static/icons/yellow_arrow.svg";

        let arrow = "";
        if ( value === null){
            arrow = pendingArrow;
            return arrow;
        }
        else {
            arrow = yellowArrow;
            return arrow;
        }
    }
    return (
       <div className={statusBoxClasses} onClick={toggleModal.bind(this, metrics.name)}>
            <div className={`row ${css.boxHeader}`}>
                <div className="col-xs-12">
                    <h5>{metrics.name}</h5>
                </div>
            </div>
            <div className={`row ${css.arrowHolder}`}>
                <div className="col-xs-6">
                    <div className={`${css.arrow} ${css.topArrow}`}>
                        <img src={getArrowImages(metrics.test)} />
                        <span>{metrics.test}</span>
                    </div>
                    <p className={css.metricsText}>Test</p>
                </div>
                <div className="col-xs-6">
                    <div className={`${css.arrow} ${css.topArrow}`}>
                        <img src={getArrowImages(metrics.maintainability)} />
                        <span>{metrics.maintainability}</span>
                    </div>
                    <p className={css.metricsText}>Maintainability</p>
                </div>
            </div>
            <div className={`row ${css.arrowHolder}`}>
                <div className="col-xs-6">
                    <div className={css.arrow}>
                        <img src={getLowerArrowImages(metrics.security)} />
                        <span>{metrics.security}</span>
                    </div>
                    <p className={css.metricsText}>security</p>
                </div>
                <div className="col-xs-6">
                    <div className={css.arrow}>
                        <img src={getLowerArrowImages(metrics.workmanship)} />
                        <span>{metrics.workmanship}</span>
                    </div>
                    <p className={css.metricsText}>Workmanship</p>
                </div>
            </div>
       </div>
    );
};
export default MetricsBox;
