import React from "react";
import '../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, ListGroup} from 'react-bootstrap';
import logo from '../assets/logo_300x214.png';

const About = () => {
  return (
    <>
    <div className="about-banner" >
    <img id="about-logo" src={logo} alt = "DotPolitic logo"></img>
    <Card className="about-banner"tabIndex='0'>
        <Card.Body>
        <Card.Title><h2>About Us</h2></Card.Title>
        <Card.Text aria-label="Description of what DotPolitics is." tabIndex='0'>
        DotPolitics is a useful tool to look up elected representatives across the United States <b>based on location.</b>
        <br></br>Having the means to educate yourself and seek out representative information in a centralized manner is vital for change.
        <br></br>We provide basic information and links to each representative's social media(s) and contact information, using the <a href="https://developers.google.com/civic-information/">Google Civics Information API</a>.
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    <div className="about-team" tabIndex='0'>
    <Card className="about-team" >
    <h2 className="card-header">Meet the Team</h2> <br></br>
    <ListGroup variant="flush">
    <ListGroup.Item>Andrew Zhu</ListGroup.Item>
    <ListGroup.Item>Chengdong Ruan</ListGroup.Item>
    <ListGroup.Item>Elizabeth Vanegas</ListGroup.Item>
    <ListGroup.Item>Emily Fang</ListGroup.Item>
    </ListGroup>
    </Card>
    </div>
    <div id="parallax-1"></div>
    
    </>
  );
}

export default About;