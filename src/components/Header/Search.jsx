import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles({
    searchInput: {
        padding: ".2rem",
        outline: "none"
    }
})


const Search = () => {
    const dispatch = useDispatch()
    const styles = useStyles()

    const [search, setSearch] = useState("")

    const seeSearchResult = () => {
        dispatch(push({
            pathname: '/search-result',
            state: {data: search}
        }))
    }

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div>
            <input onChange={(e) => onChangeSearch(e)} className={styles.searchInput} type="text" value={search} placeholder="キーワードで探す" />
            <IconButton onClick={() => seeSearchResult()} >
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default Search

