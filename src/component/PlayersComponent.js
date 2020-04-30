import React , { Component } from "react";
import {Card ,CardHeader,CardImg,CardImgOverlay,CardTitle, CardBody, CardText} from 'reactstrap';
function RenderPlayers({players ,onClick})
{
    return(
        <Card> 
                <CardHeader>{players.name}</CardHeader>
                <CardImg width="100%"  src={players.image} alt={players.name} />
                <CardBody>
                    <CardText>{players.description}</CardText>
                </CardBody>
           
        </Card>
    );
}
const Players = (props) =>{
    const players = props.players.map((player)=>{
        return(
            <div key={player.id} className="col-12 col-md-5 m-1">
                <RenderPlayers players={player} onClick={props.onClick} />
            </div>
        );
    });
    if(props.players != null)
    {
        return(
            <div className="container ">
                <div className="row">
                    
                    {players}
                </div>
            </div>
        );
    }
}
export default Players;