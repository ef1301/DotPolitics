import React, {useState} from 'react';
import {ResultCard} from '../cards/result';
import {Card} from 'react-bootstrap';
import '../styles/ResultCard.css';

const RepByLocation = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
    const query = props.match.params.query;
    React.useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${query}`)
        .then(res => res.json())
        .then(
            (result) => {
                //console.log(result);
                if(result.error) {
                    setIsLoaded(isLoaded => true);
                    setError(result.error);
                } else {
                    setIsLoaded(isLoaded => true);
                    setItems(items => {
                        const newItems = result.officials;
                        result.offices.map(office => 
                            office.officialIndices.map(index =>
                                newItems[index].officeName = office.name
                            )
                        );
                        return newItems;
                    });
                }
            },

            (er) => {
                setIsLoaded(isLoaded => true);
                setError(error => er);
            });
    }, [query]);

    if(error) {
        return (<div id="results"><Card className="resultCard">
        <Card.Header>Error {error.code}:</Card.Header> 
        <Card.Body>{error.message}.</Card.Body>
        {error.message === "Failed to parse address" ? <Card.Body><Card.Title>Disclaimer:</Card.Title>If your address has failed to parse, the address entered may not be an existing address or it is not within the US territories.</Card.Body>
        : <Card.Title>Please try again.</Card.Title>
        }
        </Card></div>);
    } else if(!isLoaded) {
        return (<div id="results">
            <Card><Card.Body>Loading Search Results...</Card.Body></Card>
            </div>);
    } else {
        return (
            <div  id="results">
                <h1 className="search">Search Results for: {decodeURIComponent(query)}</h1>
                {items.map((item,index) => (
                    <ResultCard key={index} item={item}/>
                ))}
            </div>
        );
    }
}

export default RepByLocation;