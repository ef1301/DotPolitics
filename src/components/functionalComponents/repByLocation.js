import React, {useState} from 'react';
import {ResultCard} from '../cards/result';
import {Card} from 'react-bootstrap';
import '../styles/ResultCard.css';


const RepByLocation = (props) => {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [local_checked,setLocal] = useState(true);
    const [state_checked,setState] = useState(true);
    const [federal_checked,setFederal] = useState(true);

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
                        //const Local = result.office.divisionId.includes("county");
                       result.offices.map(office => 
                            office.officialIndices.map(index =>
                                newItems[index].officeName = office.name
                            ),
                        );
                        result.offices.map(office => 
                            office.officialIndices.map(index =>
                                newItems[index].levels = office.levels
                            ),
                        );
                       result.offices.map(office => 
                            office.officialIndices.map(index =>
                                newItems[index].divisionId = office.divisionId
                            ),
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
        {error.message === "Failed to parse address" ? <Card.Body> <Card.Title>Disclaimer:</Card.Title>If your address has failed to parse, the address entered may not be an existing address or it is not within the US territories.</Card.Body>
        : <Card.Title>Please try again.</Card.Title>
        }
        </Card></div>);
    } else if(!isLoaded) {
        return (<div id="results">
            <Card><Card.Body>Loading Search Results...</Card.Body></Card>
            </div>);
    } else {
        
        let local = false;
        let state = false;
        let federal = false;

        function handleChange_Local(e) {
            (local_checked === true) ? setLocal(local_checked => false) : setLocal(local_checked => true);
            //console.log(local_checked);
          }
          function handleChange_State(e) {
            (state_checked === true) ? setState(state_checked => false): setState(state_checked => true);
            //console.log(state_checked);
          }
          function handleChange_Federal(e) {
            (federal_checked === true) ? setFederal(Federal_checked => false) : setFederal(Federal_checked => true);
            //console.log(federal_checked);
          }
            let row1 = items.map((item,index) => {
                if(local_checked === true){
                    while(item.divisionId.includes("county") && local === false ){local =true;return <><h1>Local</h1> <br></br><ResultCard  key={index} item={item}/></>;}
                    if(item.divisionId.includes("county") && local === true ){return <> <br></br><ResultCard  key={index} item={item}/></>;} 
                } 
                else{return <> </> }
            });
            let row2 = items.map((item,index) => {
                if(state_checked === true){
                    if (item.divisionId.includes("state") && state === false ){state =true;return <><h1>State</h1><br></br><ResultCard  key={index} item={item}/></>;} 
                    else if(item.divisionId.includes("state") && !item.divisionId.includes("county") ){return <> <br></br><ResultCard  key={index} item={item}/></>;} 
                } 
                else{ return <> </> }
            
            });
            let row3 = items.map((item,index) => {
                if (federal_checked === true){
                    if(item.divisionId.includes("us") && federal === false ){federal =true;return <><h1>Federal</h1> <ResultCard  key={index} item={item}/></>;} 
                    if(item.divisionId.includes("us") && !item.divisionId.includes("state") ){return <><ResultCard  key={index} item={item}/></>}
                }
                else{return <> </> }
            });
            return(
               <> 
            <div>
            <br /><p className='text-center'>
                {"Show level of government: "}
                <label>
                    <input type="checkbox" id="=local_results" value="Local"  onChange = {handleChange_Local} defaultChecked/> {"Local   "}
                </label> <> </>
                <label>
                    <input type="checkbox" id="=state_results" value="State"  onChange = {handleChange_State} defaultChecked/> {"State   "}
                </label> <> </>
                <label>
                    <input type="checkbox" id="federal_results" value="Federal" onChange = {handleChange_Federal} defaultChecked/> {"Federal   "}
                </label> 
            </p>
        </div>
        <h1 className="search">Search Results for: {decodeURIComponent(query)}</h1>
        {row3}
        {row2}
        {row1}    
        </>
        )  
    }
}

export default RepByLocation;