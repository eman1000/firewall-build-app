import request from "../../../util/request";
import update from "react/lib/update";
import { push } from "react-router-redux";
import services from "../../../services";
export const GET_FIREWALL_BUILD_DATA = "GET_FIREWALL_BUILD_DATA";
export const TOGGLE_PANEL = "TOGGLE_PANEL";
export const TOGGLE_DETAIL_VIEW_MODAL = "TOGGLE_DETAIL_VIEW_MODAL";

export function asyncGetData(){
    return (dispatch, store) => {
        request.get(services.getFireWallBuildData)
            .finish((error, res) => {
                dispatch({
                    type: GET_FIREWALL_BUILD_DATA,
                    payload: res.body
                });
            });
    };
}
export function togglePanel(payload){
    return {
        type:TOGGLE_PANEL,
        payload
    };
}
export function toggleModal(payload){
    return {
        type:TOGGLE_DETAIL_VIEW_MODAL,
        payload
    };
}
function handleGetData(state, action){
    return update(state, {
        firewallBuildData:{
            $set:action.payload
        }

    });
}
function handleTogglePanel(state, action){
    const { key, value } = action.payload;
    return update(state, {
        showPanel:{
            [key]:{
                $set:value
            }
        }
    });
}
function handleToggleDetailViewModal(state, action){
    return update(state, {
        showModal:{
            $set:!state.showModal
        },
        selectedOption:{
            $set:action.payload
        }
    });
}
const ACTION_HANDLERS = {
    GET_FIREWALL_BUILD_DATA:handleGetData,
    TOGGLE_PANEL:handleTogglePanel,
    TOGGLE_DETAIL_VIEW_MODAL:handleToggleDetailViewModal
};

const initialState = {
    showPanel:{}
};
export default function welcomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
