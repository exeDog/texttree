import React, { Component } from 'react'

export default class FolderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: this.props.name
        };
        this.nameInput = React.createRef();
    }

    startEditing() {
        this.setState({editing: true},
            ()=> { this.nameInput.focus() });
    }

    cancelEditing() {
        this.setState({editing: false});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleKeyPress(event) {
        let key = event.key;
        if(key ==="Enter" || key === "Escape") {
            this.cancelEditing();
        } else if(event.shiftKey && key === "Tab") {
            this.props.Indent(this.props.id, 'un');
        } else if(key === "Tab") {
            this.props.Indent(this.props.id, 'in')
        }
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

}
