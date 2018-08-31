import React, { Component } from 'react';
import Button from './button';
import './notes-editor.css';


export default class NoteEditor extends Component {
    state = {
        inputValue: "",
    }

    handelChange = (e) => {

        this.setState({
           inputValue: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();

        this.props.onAddNote(this.state.inputValue)

        this.setState({
            inputValue: "",
        })
    }

    render() {
    
        const { inputValue } = this.state;

        return (
            <form className="NoteEditor" onSubmit={this.handelSubmit}>
                <textarea className="NoteEditor-input" cols="30" rows="10" value={inputValue} 
                onChange={ this.handelChange }/>
                <Button type="submit" label="Add" />
            </form>);

    }
};