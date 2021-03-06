import React, {Component} from 'react';
import RepByLocation from '../functionalComponents/repByLocation';
import PollByLocation from '../functionalComponents/pollByLocation';
import '../styles/SearchComps.css';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    searchResults = () => {
        const {filter} = this.state;
        if(filter === 'Representatives') {
            return (<RepByLocation />);
        }
        else if(filter === 'Polls'){
            return (<PollByLocation />);
        } 
        else {
            return (<div>Sorry. That wasn't a valid search query.</div>);
        }
    }

    render() {
        return (
            <div id="search-results">
                {this.searchResults()}
            </div>
        );
    }
}