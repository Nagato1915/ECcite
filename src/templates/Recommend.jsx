import React from 'react'
import { useSelector } from 'react-redux';
import { getProducts } from '../reducks/products/selectors';
import { ProductCard } from '../components/Products';

const Recommend = () => {
  const selector = useSelector((state) => state);
  const products = getProducts(selector);
  const recommendedPros = products.filter(product => (
    product.recommend
  ));

  return(
    <div>
      <h2 className="u-text-ttl">Recommend</h2>
      <div className="p-grid__row">
        {recommendedPros.map(recommendedPro => (
          <ProductCard key={recommendedPro.id} images={recommendedPro.images} price={recommendedPro.price} id={recommendedPro.id} name={recommendedPro.name} />
        ))}
       </div>
    </div> 
  )
}

export default Recommend;