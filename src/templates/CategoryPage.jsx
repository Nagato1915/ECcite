import React, { Component } from 'react';
import { ProductCard } from '../components/Products';
import { useSelector } from 'react-redux';
import { getProducts } from '../reducks/products/selectors'
//import { withRouter } from 'react-router-dom'

const CategoryPage = (props) => {
    const selector = useSelector((state) => state)
    const products = getProducts(selector)
    const category = props.location.state.category.catego
    const categolizedProducts = products.filter(product => {
        if(category.id === "all") {
            return product
        }
        return product.category === category.id
    })
    return(
        <div className="c-section-wrapin">
            <h2 className="u-text-ttl">{category.name}</h2>
            <div className="p-grid__row">
            {categolizedProducts.map(product => (
                <ProductCard  key={product.id} images={product.images} price={product.price} id={product.id} name={product.name} />
            ))}
            </div>
        </div>
    )
}

/*class CategoryPage extends Component {
    render() {
        const selector = useSelector((state) => state)
        const products = getProducts(selector)
        const category = this.props.location.state.category.catego
        console.log(products, category)
        return(
            <div className="c-section-wrapin">
                <h2>{category.name}</h2>
                
            </div>
        )
    }
}*/
export default CategoryPage