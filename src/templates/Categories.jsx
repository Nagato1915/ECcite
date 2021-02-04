import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Category } from '../templates';
import tops from '../assets/img/tops.jpeg';
import bottoms from '../assets/img/bottoms.jpeg';
import outer from '../assets/img/outer.jpeg';
import setup from '../assets/img/setup.jpeg';
import goods from '../assets/img/goods.jpeg';
import all from '../assets/img/all.jpeg';



const Categories = () => {

  const dispatch = useDispatch()
  const selectCategory = useCallback((path, catego) => {
      dispatch(push({
        pathname: path,
        state: {category: {catego}}
      }))
      window.scrollTo(0, 0)
  })
    const categories = [
        {id: "tops", name: "TOPS", img: tops, value: "/category/tops"},
        {id: "bottoms", name: "BOTTOMS", img: bottoms, value: "/category/bottom"},
        {id: "outer", name: "OUTER", img: outer, value: "/category/outer"},
        {id: "setup", name: "SETUP", img: setup, value: "/category/setup"},
        {id: "goods", name: "GOODS", img: goods, value: "/category/goods"},
        {id: "all", name: "ALL", img: all, value: "/category"},
      ]
    return(
      <div>
         <h2 className="u-text-ttl">Category</h2>
         <div className="categories">
            {categories.map(category => (
                <Category id={category.id} category={category} key={category.id} selectCategory={selectCategory} />
            ))}
         </div>     
      </div> 
    )
  }
  
  export default Categories;