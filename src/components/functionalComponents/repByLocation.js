import React, {useState} from 'react';
import {ResultCard} from '../cards/result';

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
                console.log(result);
            },

            (er) => {
                setIsLoaded(isLoaded => true);
                setError(error => er);
            });
    }, [query]);

    console.log(items);

    if(error) {
        return (<>Error: {error.message}</>);
    } else if(!isLoaded) {
        return (<>Loading Search Results...</>);
    } else {
        return (
            <>
                {items.map((item,index) => (
                    <ResultCard key={index} item={item}/>
                ))}
            </>
        );
    }
}

export default RepByLocation;