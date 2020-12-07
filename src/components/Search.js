import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state={
            SearchText :''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searching(this.state.SearchText);

        this.setState({SearchText:''});
    }
    onChange = (e) => {
        this.setState({SearchText: e.target.value})
}
render(){
        return(
            <Form className="my-4   " onSubmit={this.onSubmit}>
                <Form.Control type="text" name="SearchText" placeholder="Search Actor/Actrees" value={this.state.SearchText} 
                onChange={this.onChange} autoFocus/>
                <Button className="mt-1" variant="success" type="submit" block>Search</Button>
            </Form>
        );
    }
//variant="dark"

}

Search.propTypes={
    searchMovies: PropTypes.func.isRequired
}

export default Search;