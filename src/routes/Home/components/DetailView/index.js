import React from "react";
import { Modal } from "react-bootstrap";

export const DetailView = ({toggleModal, selectedOption}) => {
    return (
        <div>
            <Modal show>
                <Modal.Header closeButton onHide={()=>toggleModal()}>
                    <h1>Detail View</h1>
                </Modal.Header>
                <Modal.Body>
                    <h2>You Selected: <i>{selectedOption}</i></h2>
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default DetailView;
