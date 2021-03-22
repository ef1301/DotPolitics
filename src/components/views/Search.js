import React, {Component} from 'react';
import RepByLocation from '../functionalComponents/repByLocation';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    searchResults = () => {
        const {filter, query} = this.state;
        if(filter === 'Representatives') {
            return (<RepByLocation />);
        } else {
            return (<div></div>);
        }
    }

    render() {
        const {filter, query} = this.state;
        return (
            <>
                <RepByLocation />
            </>
        );
    }
}