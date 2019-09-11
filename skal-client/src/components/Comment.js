import React from 'react';



class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h2>HERREEEE</h2>
            <h3>{this.props.comment.content}</h3>
        </div>
    )
    }
}


export default Comment;