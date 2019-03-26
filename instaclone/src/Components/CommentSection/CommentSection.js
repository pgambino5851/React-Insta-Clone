import React from 'react';
import '../CommentSection/comment-section.css';
import { CardText } from 'reactstrap';

const CommentSection = props => {
    console.log(props);
    return(
        props.comments.map(comment => {
            return (
                <CardText><span>{comment.username}</span> {comment.text} </CardText>
            )
        })
    )
}

export default CommentSection;