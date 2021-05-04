import React from 'react';
import {Card} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import pfp from '../assets/pfp.png';

const ResultCard = (props) => {
    let officials = props.item;

    const hideImgWhenError = e => {
        e.target.onerror = null;
        console.log(e);
        e.target.src=pfp;
    };

    return (
        <Card className="resultCard">

            <div className="party"tabIndex='0'>
            {officials.party}
            </div> 
            
            <Card.Body>

            <div className="name"tabIndex='0'>
            {officials.name}
            </div>
            <div className="secondname"tabIndex='0'>
            {officials.officeName}
            </div>


            <div className="image" tabIndex='0'>
            {officials.photoUrl ? <img src={officials.photoUrl} onError={hideImgWhenError} alt={`${officials.name}`}></img> : <img src={pfp} alt={`${officials.name}`} aria-label="No Representative Photo"></img>}
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
                                return(<SocialIcon key={index} style={{ height: 20, width: 20 }} url={link}  />);
                            } else if (channel.type === "Facebook") {
                                const link = "https://facebook.com/" + channel.id;
                                return(<SocialIcon key={index}style={{ height: 20, width: 20 }} url={link} />);
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
    let address = "";
    Object.entries(out.address).forEach(([key,value]) => {
        if(value !== "") {
            address += value + " ";
        }
    })
    return (
        <Card>
            <Card.Header>{address}</Card.Header>
            <Card.Body>Polling Hours: {out.pollingHours}</Card.Body>
        </Card>
    );
};

export {ResultCard, ResultCardPoll};
// export default ResultCard;