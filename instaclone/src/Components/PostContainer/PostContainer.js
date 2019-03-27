import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../PostContainer/post-container.css';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {

    console.log(props);

    // props.cards.forEach(card => {
    //     console.log(card);
    // })
   
    // return (
    //     <div>
    //         PostContainer
    //     </div>
    // )
    return (
       <div className="post-container">
           {props.cards.map(card => {
            //    console.log(card.id);
            //    console.log(card.likes);
            //    console.log(card.id);
               return(
                <Card key={Date.now() * Math.random()} >
                    <div className="thumbnail">
                        <img src={card.thumbnailUrl} /> 
                        <span>{card.username}</span>
                    </div>
                    <CardImg src={card.imageUrl} />
                    <div className="font-container">
                        <i 
                        className="far fa-heart fa-2x" 
                        onClick={() => {props.updateLikes(card.id)}}></i>
                        <i className="far fa-comment fa-2x"></i>
                    </div>
                    <CardSubtitle >{card.likes} likes</CardSubtitle>
                    <CommentSection comments={card.comments} id={card.id}/>
               </Card>
            )
           })}   
       </div>
    );
};

export default PostContainer;