import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="search" />
                <i className="fas fa-search" />
            </div>
        );
    }
}

export default Search;