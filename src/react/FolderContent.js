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

    renderInput() {
        return (
            <input
                ref={this.nameInput}
                type='text'
                onKeyDown={this.handleKeyPress}
                onChange={this.handleNameChange}
                onBlur={this.cancelEditing}
                value={this.state.name}
            />
        );
    }

    renderIndent() {
        let depth = this.props.depth,depthArr = [],i;
        for (i = 0; i < depth; i++) {
            depthArr.push(<span key={'indent'+i} className='indent'></span>)
        }
        return depthArr;
    }

    renderButtons() {
        return (
            <ul className='cta-buttons'>
                <li onClick={this.handleDelete}>⛌</li>
            </ul>
        )
    }

    renderName() {
        return (
            <span onClick={this.startEditing} className='name'>{this.state.name}</span>
        )
    }

    render() {
        let elm = '';
        const { editing } = this.state;

        if (editing) {
            elm = this.renderInput();
        } else {
            elm = this.renderName();
        }

        return (
            <div className='folder-content group'>
                {this.renderButtons()}
                {this.renderIndent()}
                {elm}
            </div>
        )
    }
}
