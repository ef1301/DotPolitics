import React, {useState} from 'react';
import {ResultCardPoll} from '../cards/result';
import {Card} from 'react-bootstrap';
import successful_poll from '../assets/successful_poll';
import '../styles/ResultCard.css';

const PollByLocation = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
    const query = props.match.params.query;
    React.useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${query}`)
        .then(res => res.json())
        .then(
            (result) => {
                if(result.error) {
                    setIsLoaded(true);
                    setError(result.error);
                } else {
                    setIsLoaded(true);
                    setItems(result.pollingLocations);
                }
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
            
    }, [query]);


    if(error) {
        return (<div id="results">
        <Card className="resultCard">
        <Card.Header>Error {error.code}:</Card.Header>
        <Card.Body>{error.message}.
        {error.message === "Failed to parse address" ? <> <br/><Card.Title>Disclaimer: </Card.Title>If your address has failed to parse, the address entered may not be an existing address or it is not within the US territories.</>
        : <> Please try again.</>
        }
        </Card.Body>
        <Card.Body>
        <Card.Title>Additional Disclaimer: Election and polling location information are updated at most 2 weeks in advance of elections. 
            When there is no updated election information on the Google Civics Information API, no polling locations will be returned.</Card.Title>
        </Card.Body>
        <Card.Body>
            <Card.Title>Here is an example of what a result could look like:</Card.Title>
            {successful_poll.pollingLocations.map((item, index) =>
                <ResultCardPoll key={index} item={item}/>
            )}
        </Card.Body>
        </Card></div>);
    } else if(!isLoaded) {
        return (<div id="results">
        <Card><Card.Body>Loading Search Results...</Card.Body></Card>
        </div>);
    } else {
        return (
            <div id="results">
                <h1>Search Results for: {decodeURIComponent(query)}</h1>
                {items.map((item,index) => (
                    <ResultCardPoll key={index} item={item}/>
                ))}
            </div>
        );
    }
}

export default PollByLocation;