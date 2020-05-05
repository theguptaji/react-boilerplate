import React from 'react'

const SearchBar = ({searchfield, onSearchUpdate}) => {
    return (
        <div className='pa2' >
            <input
                className='pa3 ba b--green bg-lightest-blue' 
                type='search'
                placeholder='search robots'
                onChange={onSearchUpdate}
                />
        </div>
    );
}

export default SearchBar;