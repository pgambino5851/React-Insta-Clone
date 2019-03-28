import React, { Component } from 'react';
import '../CommentSection/comment-section.css';
import { CardText, Input, Button} from 'reactstrap';
import styled, {css} from 'styled-components'


const CardTextContainer = styled(CardText)`

`

const CommentText = styled.span`
    font-weight: bold;
`
const CommentInput = styled(Input)`
    margin: 0 auto;
    height: 40px !important;
`
const SubmitButton = styled(Button)`
color: lightblue;
margin-top: 10px;
`

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            id: this.props.id,
            newComment: ''
        }
        // console.log(this.state.comments);
    }
    

    updateComment = event => {
        // console.log('The Target is:', event.target);
        // console.log('event:', event.target.value);
        // console.log('This.newComment is', this.newComment);
        console.log(event.target.id);
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log("newComment is", this.state.newComment)
        console.log("These comments are", this.state.comments);
    }

    submitComment = (event, id) => {
        event.preventDefault();
        const comment = {
            id: Date.now(),
            username: localStorage.getItem('username'),
            text: this.state.newComment
        }

        this.setState({
            comments: [...this.state.comments, comment],
            newComment: ''
        })
    }

    render() {
        // console.log('This.props is', this.props)
        // console.log('This.state.comments is', this.state.comments);
        // console.log("This comment section's id is", this.state.id);
        // console.log(this.state.comments);
        return(
            <div>
                {this.state.comments.map(comment => {
                 return (
                    <CardTextContainer key={comment.id}>
                        <CommentText>{comment.username} {comment.text} </CommentText>
                    </CardTextContainer>
                )
             })}
                 <CommentInput id={this.state.id} value={this.state.newComment} className="comment-input" type="textarea" name="newComment" placeholder="Add a comment..." onChange={this.updateComment} />
                 <SubmitButton color="primary" onClick={this.submitComment}>Submit</SubmitButton>
            </div>
        )}
}


// const CommentSection = props => {
//     console.log(props);
//     return(
//     <div>
//         {props.comments.map(comment => {
//             return (
//                 <CardText key={comment.id}>
//                     <span>{comment.username} {comment.text} </span>
//                 </CardText>
//             )
//         })}
//         <Input className="comment-input" type="textarea" name="text" placeholder="Add a comment..." />
//     </div>
        
      
//     )
// }

export default CommentSection;