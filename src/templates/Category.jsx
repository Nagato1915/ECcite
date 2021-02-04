import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Category extends Component {
    render() {
       const selectCategory = this.props.selectCategory;
       const category = this.props.category;

        return(
            <div>
                <li className="category" onClick={() => selectCategory(category.value, category)}>
                    <div className="p-media-box">
                        <img className="category-img" src={category.img} alt={category.name} />
                    </div>
                    <h3 className="category-name">{category.name}</h3>
               </li>
            </div>
        )
    }
}

/*const Category = ({category, selectCategory}) => {
    return(
        <li className="category" onClick={() => selectCategory(category.value, category)}>
            <div className="p-media-box">
                <img className="category-img" src={category.img} alt={category.name} />
            </div>
            <h3 className="category-name">{category.name}</h3>
        </li>
    )
}*/

  
export default withRouter(Category);