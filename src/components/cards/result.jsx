import React from 'react';
import {Card} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const ResultCard = (props) => {
    let officials = props.item;
    return (
        <Card>
            <Card.Header>{officials.party}</Card.Header>
            <Card.Body>
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