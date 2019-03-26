import React from 'react';
import '../CommentSection/comment-section.css';
import { CardText, Input } from 'reactstrap';

const CommentSection = props => {
    console.log(props);
    return(
    <div>
        {props.comments.map(comment => {
            return (
                <CardText>
                    <span>{comment.username} {comment.text} </span>
                </CardText>
            )
        })}
        <Input className="comment-input" type="textarea" name="text" placeholder="Add a comment..." />
        {/* props.comments.map(comment => {
            return(
                <CardText>
                    <span>{comment.username}</span> {comment.text} 
                </CardText>   
            )
    }) */}
    </div>
        
        // <Input type="textarea" name="text" placeholder="Comment" />
    )
}

export default CommentSection;