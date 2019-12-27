import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <p>Do you want to delete all desks?</p>
                <div>
                    <IconButton aria-label="check" color="primary" onClick={this.props.deleteAllDesks}> <CheckIcon
                        fontSize="large"/></IconButton>
                    <IconButton aria-label="close" color="primary" onClick={this.props.hideModal}> <CloseIcon
                        fontSize="large"/></IconButton>
                </div>
            </div>
        )
    }
}

export default Modal;
