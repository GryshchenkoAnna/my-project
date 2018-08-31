import React, { Component } from 'react';
import Button from './button';
import './modal.css';


class Modal extends Component {
    state = {
        text: this.props.note.text
    };

    handelChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handelSave = () => {
        this.props.onSave({
            ...this.props.note,
            text: this.state.text,
        })
    };

    render() {
        const { text } = this.state;
        const { onClose } = this.props;

        return (
            <div className="Modal">
                <textarea rows="10" className="Modal-input" value={text} onChange={this.handelChange} />
                <div className="Modal-actions">
                    <Button label="Save" onClick={this.handelSave} />
                    <Button label="Cancel" onClick={onClose} />
                </div>
            </div>
        )
    }
};

export default Modal;