import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { addToDeskIgnore } from '../actions/actions'
import { connect } from 'react-redux'

class Modal extends React.Component {
    delete = () => {
        this.props.desks.map((order) => {
            if (!this.props.deskIgnore.includes(order)) {
                this.props.addToDeskIgnore(order)
            }
            return order
        })
        this.props.hideModal()
    }

    render () {
        return (
            <div className="modal">
                <p>Are you sure?</p>
                <div>
                    <IconButton aria-label="check" color="primary" onClick={this.delete}> <CheckIcon
                        fontSize="large"/></IconButton>
                    <IconButton aria-label="close" color="primary" onClick={this.props.hideModal}> <CloseIcon
                        fontSize="large"/></IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        deskIgnore: store.modal.deskIgnore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDeskIgnore: (order) => dispatch(addToDeskIgnore(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
