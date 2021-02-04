import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducks/products/operations';
import { Categories, ProductList, Recommend } from '../templates';
import { Hero } from '../components/Hero';


const Top = () => {
    return(
      <section className="c-section-wrapin">
        <div className="module-spacer--medium"/>
         <Hero />
         <div className="module-spacer--medium"/>
         <ProductList />
         <div className="module-spacer--medium"/>
         <Recommend />
         <div className="module-spacer--medium"/>
         <Categories />
      </section>
    )
}

export default Top