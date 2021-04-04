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
        const {filter} = this.state;
        if(filter === 'Representatives') {
            return (<RepByLocation />);
        } else {
            return (<div></div>);
        }
    }

    render() {
        return (
            <>
                <RepByLocation />
            </>
        );
    }
}