import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {FormControl, InputGroup, Dropdown, DropdownButton, Button, Form, ButtonGroup} from 'react-bootstrap';
import '../styles/SearchComps.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: 'Representatives',
            filters: ['Representatives', 'Polls'],
            location: '',
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
            }
        else{alert("Location does not work")}
    }
    
    getCoordinates(position){
        this.setState({
            location: [position.coords.latitude, position.coords.longitude]
        })
    }

    handleQuery = (event) => {
        this.setState({query: event.target.value});
    }

    handleFilter = (event) => {
        this.setState({filter: event});
    }

    handleLocation= (event) => {
        this.getLocation({location: this.state.location})
        this.setState({query: this.state.location});
        event.preventDefault();
    }

    handleSubmit = (event) => {
        const {filter, query} = this.state;
        let encoded_address = encodeURIComponent(query);
        this.props.history.push(`/search/${filter}/${encoded_address}`);
    }

    render() {
        const {query, filter, filters} = this.state;
            return (
                <div id="search-bar" aria-describedby="searchbar-label">
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Label id="searchbar-label">Enter your location or hit the Location button:</Form.Label>
                    <InputGroup >
                        <FormControl value={query} onChange={this.handleQuery} 
                            placeholder="Enter Location Here" 
                            aria-label="Search Bar" 
                        />

                    <Form.Group>
                    <DropdownButton
                        as={ButtonGroup}
                        aria-label="Drop Down Bar with 2 options"
                        variant="outline-secondary"
                        title={filter}
                        id="input-group-dropdown-2"
                        onSelect={this.handleFilter}
                    >
                        {filters.map((item, index) => {
                            return (<Dropdown.Item eventKey={item} key={index} onChange={this.handleFilter} value={item}>{item}</Dropdown.Item>);
                        })}
                    </DropdownButton>
                    </Form.Group>

                    <Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}> Search </Button>
                    <Button variant="primary" type="submit"  onClick={this.handleLocation} aria-label="Click to enter current location in search bar."> Location </Button> 
                    </Form.Group>
                    </InputGroup>
                    </Form>
                </div>
        );
    }
}

export default withRouter(SearchBar);