import React, { useEffect, useCallback } from 'react';
import { ProductCard } from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducks/products/operations';
import { getFeaturedProducts } from '../reducks/products/selectors';
import { PrimaryButton } from '../components/UIkit/';
import { push } from 'connected-react-router';



const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getFeaturedProducts(selector);
  

  const query = window.location.search;
  const gender = /^\?gender=/.test(query) ? query.split("?gender=")[1] : "";
  const category = /\^?category=/.test(query) ? query.split("?category=")[1] : "";

  const seeAll = useCallback(() => {
    dispatch(push('/Products'))
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    dispatch(fetchProducts(gender, category))
  }, [query]);

  return(
    <div>
      <h2 className="u-text-ttl">Our Proudcts</h2>
      <div className="p-grid__row">
        {products.length > 0 && (
          products.map(product => (
            <ProductCard key={product.id} images={product.images} price={product.price} id={product.id} name={product.name} />
          ))
        )}
      </div>
      <PrimaryButton label={"See All"} onClick={seeAll} />
    </div>
  )
}

export default ProductList