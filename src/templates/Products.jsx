import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../reducks/products/selectors';

import { ProductCard } from '../components/Products';

const Products = () => {

    const selector = useSelector(state => state)
    const products = getProducts(selector)

    return(
        <div className="c-section-wrapin">
            <h2 className="u-text-ttl">Our Proudcts</h2>
            <div className="p-grid__row">
                {products.length > 0 && (
                products.map(product => (
                <ProductCard key={product.id} images={product.images} price={product.price} id={product.id} name={product.name} />
                ))
              )}
            </div>
        </div>
    )
}

export default Products