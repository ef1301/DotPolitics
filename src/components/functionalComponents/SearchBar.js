import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";
import {FormControl, InputGroup, Dropdown, DropdownButton, Button, Form, ButtonGroup} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: 'Polls',
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
       {/*} const {filter, query} = this.state;
        console.log(filter);
        let encoded_address = encodeURIComponent(query);
    this.props.history.push(/search/${filter}/${encoded_address});*/}
    }

    handleSubmit = (event) => {
        const {filter, query} = this.state;
        let encoded_address = encodeURIComponent(query);
        this.props.history.push(`/search/${filter}/${encoded_address}`);
    }

    render() {
        const {query, filter, filters} = this.state;
            return (
                <>
                    <Form onSubmit={this.handleSubmit}>
                    <InputGroup >
                    <FormControl value={query} onChange={this.handleQuery} 
                        placeholder="Search" 
                        aria-label="Search Bar" 
                        aria-describedby="basic-addon2"
                    />
                
                    <DropdownButton
                        as={ButtonGroup}
                        variant="outline-secondary"
                        title={filter}
                        id="input-group-dropdown-2"
                        onSelect={this.handleFilter}
                    >
                        {filters.map((item, index) => {
                            return (<Dropdown.Item eventKey={item} onChange={this.handleFilter} value={item}>{item}</Dropdown.Item>);
                        })}
                    </DropdownButton>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}> Search </Button>
                    <Button variant="primary" type="submit"  onClick={this.handleLocation}> Location </Button> 
                    </InputGroup>
                    </Form>
                </>
        );
    }
}

export default withRouter(SearchBar);