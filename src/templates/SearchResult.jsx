import React, {Component} from 'react';
import { getProducts } from '../reducks/products/selectors';
import { useDispatch, useSelector } from 'react-redux';

const SearchResult = (props) => {

    const selector = useSelector((state) => state)
    const products = getProducts(selector)
    const keywords = products.map(product => {
        return product.keyword
    }).map(keyword => keyword.split(","))
    const searchResult = props.location.state.data

   

   console.log(keywords, searchResult)

    return(
        <div className="c-section-wrapin">
            <h2>Search Result: {searchResult}</h2>
        </div>
    )
}


export default SearchResult