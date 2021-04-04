import React, {useState} from 'react';
import {ResultCardPoll} from '../cards/result';

const PollByLocation = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
    const query = props.match.params.query;
    console.log(query);
    React.useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${query}&returnAllAvailableData=true`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(isLoaded => true);
                setItems(items => result.pollingLocations);
                console.log(result);
            },

            (er) => {
                setIsLoaded(isLoaded => true);
                setError(error => er);
            });
    }, []);

    if(error) {
        return (<>Error: {error.message}</>);
    } else if(!isLoaded) {
        return (<>Loading Search Results...</>);
    } else {
        return (
            <>
                {/* {items.map((item,index) => (
                    <ResultCardPoll key={index} item={item}/>
                ))} */}
            </>
        );
    }
}

export default PollByLocation;