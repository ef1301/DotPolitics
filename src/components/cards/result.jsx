import React from 'react';
import {Card} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import '../styles/ResultCard.css';
const ResultCard = (props) => {
    let officials = props.item;
    return (
        <Card className="repCard">
            <Card.Header>{officials.party}</Card.Header>
            <Card.Body>
            {(() => {
        if (officials.photoUrl) {
          return (<div><img src={officials.photoUrl} alt={officials.name}></img></div>)
        } else {
          return (<div><img src={"https://i.ibb.co/8B3XSYm/pfp-02.png"} alt="profile image"></img></div>)
        }
      })()}
                <Card.Title>{officials.name}</Card.Title>
                    <Card.Text>
                        Phone: {officials.phones.map(number => number)}
                        <br/>
                        Links: {officials.urls.map(link => <a href={link}>{link}</a>)}
                    </Card.Text>
                    {officials.channels.map(channel => {
                        if(channel.type === "Twitter") {
                            const link = "https://twitter.com/" + channel.id;
                            return(<SocialIcon url={link} />);
                        } else if (channel.type === "Facebook") {
                            const link = "https://facebook.com/" + channel.id;
                            return(<SocialIcon url={link} />);
                        }
                    })}
            </Card.Body>
        </Card>
    );
};

export default ResultCard;