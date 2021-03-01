import React, {Component} from 'react';
import ResultCard from '../cards/result.jsx';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }

    render() {
        return (
            <ResultCard/>
        );
    }
}