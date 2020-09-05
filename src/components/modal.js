import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { addToDeleteList } from "../actions/actions";
import { connect } from "react-redux";

class Modal extends React.Component {
  delete = () => {
    this.props.desksId.map((currentId) =>
      this.props.addToDeleteList(currentId)
    );
    this.props.hideModal();
  };

  render() {
    return (
      <div className="modal">
        <p>Are you sure?</p>
        <div>
          <IconButton
            aria-label="check"
            color="primary"
            className="modal__button"
            onClick={this.delete}
          >
            <CheckIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="close"
            color="primary"
            className="modal__button"
            onClick={this.props.hideModal}
          >
            {" "}
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    desksIdToDelete: store.modal.desksId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDeleteList: (order) => dispatch(addToDeleteList(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
