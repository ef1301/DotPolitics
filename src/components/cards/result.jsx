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
            {officials.photoUrl ? <img src={officials.photoUrl} alt={officials.name}></img> : <img src={"https://i.ibb.co/8B3XSYm/pfp-02.png"} alt={officials.name}></img>}
            <Card.Title>{officials.name}</Card.Title>
                    Phone: {officials.phones ? officials.phones.map((number,index) => <p key={index}>{number}</p>) : <p></p>}
                    Links: {officials.urls ? officials.urls.map((link, index) => <a key={index} href={link}>{link}</a>) : <p></p>}
                    {officials.channels ? officials.channels.map((channel, index) => {
                            if(channel.type === "Twitter") {
                                const link = "https://twitter.com/" + channel.id;
                                return(<SocialIcon key={index} url={link} />);
                            } else if (channel.type === "Facebook") {
                                const link = "https://facebook.com/" + channel.id;
                                return(<SocialIcon key={index} url={link} />);
                            } else return <></>;
                        }) :
                        <p></p>
                    }
            </Card.Body>
        </Card>
    );
};

const ResultCardPoll = (props) => {
    let out = props.item;
    return (
        <div>
            {out.name}
        </div>
    );
};

export {ResultCard, ResultCardPoll};
// export default ResultCard;