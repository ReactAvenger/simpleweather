import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSearchValue } from '../redux/actions'

const SearchBar = () => {

    const dispatch = useDispatch()
    const onChangeHandler = (event) => {
        dispatch(updateSearchValue(event.target.value))
    }

    return (
        <div className='header-block'>
            <h2>Enter the city Name</h2>
            <input type='text' onChange={onChangeHandler} name='searchValue' />
        </div>
    )
}

export default SearchBar;
