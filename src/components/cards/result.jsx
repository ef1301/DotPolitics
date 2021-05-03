import React from 'react';
import {Card} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import pfp from '../assets/pfp.png';
import '../styles/ResultCard.css';

const ResultCard = (props) => {
    let officials = props.item;
    return (
        <Card className="repCard">

            <div className="party"tabIndex='0'>
            <Card.Header>{officials.party}</Card.Header>
            </div> 
            
            <Card.Body>

            <div className="name"tabIndex='0'>
            {officials.name}
            </div>
            <div className="secondname"tabIndex='0'>
            {officials.officeName}
            </div>


            <div className="image" tabIndex='0'>
            {officials.photoUrl ? <img src={officials.photoUrl} alt={`${officials.name}`}></img> : <img src={pfp} alt={`${officials.name}`} aria-label="No Representative Photo"></img>}
            </div>

            

            <div className="phone"tabIndex='0'>
            Phone: {officials.phones ? officials.phones.map((number,index) => <p key={index}>{number}</p>) : <p></p>}
            </div>


            <div className="link"tabIndex='0'>
            Links: {officials.urls ? officials.urls.map((link, index) => <p><a key={index} href={link}>{link}</a></p>) : <p></p>} 
            </div>


            <div className="website"tabIndex='0' aria-label="Social Media Links">
            {officials.channels ? officials.channels.map((channel, index) => {
                            if(channel.type === "Twitter") {
                                const link = "https://twitter.com/" + channel.id;
                                return(<SocialIcon key={index} style={{ height: 40, width: 40 }} url={link}  />);
                            } else if (channel.type === "Facebook") {
                                const link = "https://facebook.com/" + channel.id;
                                return(<SocialIcon key={index}style={{ height: 40, width: 40 }} url={link} />);
                            } else return <></>;
                        }) :
                        <p></p>
                    }
            </div>
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