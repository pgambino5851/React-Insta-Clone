import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../PostContainer/post-container.css';
import CommentSection from '../CommentSection/CommentSection'
import styled, {css} from 'styled-components'

const PostHolder = styled.div`
    width: 650px;
    margin: 0 auto;
`

const PostCard =styled(Card)`
    border: none !important;
    text-align: start;
    margin-bottom: 30px;
`

const IconContainer = styled.div`
    margin-top: 10px;
    display: flex !important;
    width: 15% !important;
    justify-content: space-between !important;
`

const ThumbnailContainer = styled.div`
    margin-bottom: 15px;
`

const UserThumbnail = styled.img`
    width: 7.5%;
    border-radius: 100%;
    margin-left: 10px;
`
const User = styled.span`
    margin-left: 10px;
`

const CardSub = styled(CardSubtitle)`
    font-weight: bold;
    margin-top: 10px !important;
`

const Comments = styled(CommentSection)`

`

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
       <PostHolder>
           {props.cards.map(card => {
            //    console.log(card.id);
            //    console.log(card.likes);
            //    console.log(card.id);
               return(
                <PostCard key={Date.now() * Math.random()} >
                    <ThumbnailContainer>
                        <UserThumbnail src={card.thumbnailUrl} /> 
                        <User>{card.username}</User>
                    </ThumbnailContainer>
                    <CardImg src={card.imageUrl} />
                    <IconContainer>
                        <i 
                        className="far fa-heart fa-2x" 
                        onClick={() => {props.updateLikes(card.id)}}></i>
                        <i className="far fa-comment fa-2x"></i>
                    </IconContainer>
                    <CardSub >{card.likes} likes</CardSub>
                    <Comments comments={card.comments} id={card.id}/>
               </PostCard>
            )
           })}   
       </PostHolder>
    );
};

export default PostContainer;