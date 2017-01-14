import React from "react";
import * as css from "./Result.scss";
import classnames from "classnames";
export const Result = ({result, state}) => {
    const buttonLabelMap = {
        pending:"Run Build",
        running:"Stop",
        complete:"Deploy",
        accepted:"Merge Build",
        rejected:"Find Issues"
    };
    return (
       <div className={css.box}>
            <div className={`row ${css.boxHeader}`}>
                <div className="col-xs-12">
                    <h5>Result:</h5>
                </div>
            </div>
            <div className={`row ${css.resultHolder}`}>
                <div className="col-xs-12">
                    <span>{result.message}</span>
                    <h1>{result.subMessage}</h1>
                </div>
            </div>
            <div className={`row ${css.action}`}>
                <div className="col-xs-12">
                    <button className={state === "complete" && css.buttonWidth}>{buttonLabelMap[state]}</button>
                    { state === "complete" && <span className={css.deploy}>to</span> }
                    { state === "complete" &&
                    <div>
                       <select>
                            <option>Production</option>
                            <option>Heroku</option>
                        </select>
                    </div>
                    }
                </div>
            </div>
       </div>
    );
};
export default Result;
