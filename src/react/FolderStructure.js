import React, { Component } from 'react'
import FolderContent from './FolderContent'

export default class FolderStructure extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contents: this.props.contents,
        };
        this.Indent = this.Indent.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
    }

    Indent(id,type) {
        let contents = this.state.contents, previousContent, content, i;

        for (i = 0; i < contents.length; i++) {
            content = contents[i];
            previousContent = (i > 0) ? contents[i-1] : null;
            if (content.id === id) {
                if (type === 'in') {
                    if (content.depth === 1) {
                        alert('Can not indent root folder');
                    } else if (!!previousContent && (content.depth - previousContent.depth) === 1) {
                        alert('Can not indent siblings');
                    } else {
                        content.depth+=1;
                    }
                    break;
                } else {
                    if (content.depth === 1) {
                        alert('Can not un indent root folder.');
                    } else if (content.depth === 2) {
                        alert('Can not indent this item.');
                    } else {
                        content.depth = content.depth - 1;
                    }
                    break;
                }
            }
        }
        this.setState({contents});
    }

    onDelete(id) {
        let contents = this.state.contents,i;

        if(id === 1) {
            alert('Can not remove root element');
        } else {
            for(i = 0; i< contents.length; i++) {
                if (contents[i].id === id) {
                    contents.splice(i,1);
                    break;
                }
            }
            this.setState({contents});
        }
    }

    addNewComment() {
        let contents = this.state.contents,
            newContent = {name: 'file-name'},
            lastContent = contents[contents.length - 1];

        newContent.id = lastContent.id + 1;
        newContent.depth = lastContent.depth;
        contents.push(newContent);

        this.setState({
            contents: contents
        });

    }

    render() {
        return (
            <div className='folder-structure'>
                {
                    this.state.contents.map((content,index) => {
                        return <FolderContent
                            key={'content-'+index}
                            id={content.id}
                            name={content.name}
                            depth={content.depth}
                            onDelete={this.onDelete}
                            onIndent={this.Indent}
                            onUnIndent={this.Indent}
                        />
                    })
                }
                <div onClick={this.addNewComment} className='add-new folder-content'>
                    <ul className='cta-buttons'>
                        <li onClick={}>⛌</li>
                    </ul>
                    <span className='name'>{''}</span>
                </div>
            </div>

        )

    }

}


