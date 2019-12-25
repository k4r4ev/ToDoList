import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="modal">
                <p>Do you want to delete all desks?</p>
                <div>
                    <input type="button" onClick={this.props.deleteAllDesks} value="Yes"/>
                    <input type="button" onClick={this.props.hideModal} value="No"/>
                </div>
            </div>
        )
    }
}

export default Modal;
