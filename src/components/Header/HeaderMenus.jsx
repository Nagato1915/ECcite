import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';
import { getProductsInCart, getUserId, getFavProductsInCart } from '../../reducks/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { db } from '../../firebase/index';
import { fetchProductsInCart, fetchFavProductsInCart } from '../../reducks/users/operations';
import { push } from 'connected-react-router';
import { Search } from '../Header'




const HeaderMenus = (props) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const uid = getUserId(selector)
  let productsInCart = getProductsInCart(selector)
  let favProducts = getFavProductsInCart(selector)
  
  useEffect(() => {
    const unsubscribee = db.collection("users").doc(uid).collection("fav").onSnapshot(snapShots => {
      snapShots.docChanges().forEach(change => {
        const product = change.doc.data();
        const changeType = change.type;

        switch (changeType) {
          case "added":
            favProducts.push(product);
            break;
          case "modified":
            const index =  favProducts.findIndex(product =>  product.favId === change.doc.id);
            favProducts[index] = product
            break;
          case "removed":
            favProducts =  favProducts.filter(product =>  product.favId !== change.doc.id);
            break;
          default:
            break;
        }
      })
     
      dispatch(fetchFavProductsInCart(favProducts))
    })

    return () => unsubscribee()
  }, [])

  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("cart").onSnapshot(snapShots => {
      snapShots.docChanges().forEach(change => {
        const product = change.doc.data();
        const changeType = change.type;

        switch (changeType) {
          case "added":
            productsInCart.push(product);
            break;
          case "modified":
            const index = productsInCart.findIndex(product => product.cartId === change.doc.id);
            productsInCart[index] = product
            break;
          case "removed":
            productsInCart = productsInCart.filter(product => product.cartId !== change.doc.id);
            break;
          default:
            break;
        }
      })
      dispatch(fetchProductsInCart(productsInCart))
    })

    return () => unsubscribe()
  }, [])

  
  /*const unsubscribee = db.collection("users").doc(uid).collection("fav").onSnapshot(snapShots => {
      snapShots.docChanges().forEach(change => {
        const product = change.doc.data();
        const changeType = change.type;

        switch (changeType) {
          case "added":
            favProducts.push(product);
            break;
          case "modified":
            const index = favProducts.findIndex(product => product.favId === change.doc.id);
            favProducts[index] = product
            break;
          case "removed":
            favProducts = favProducts.filter(product => product.favId !== change.doc.id);
            break;
          default:
            break;
        }
      })
      dispatch(fetchFavProductsInCart(favProducts))
    })
    return () => unsubscribee()

    */
    

  return(
   <>
      <Search />
      <IconButton onClick={() => dispatch(push("/cart"))}>
        <Badge badgeContent={productsInCart ? (productsInCart.length > 0) ?  productsInCart.length : 0 : 0} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={() => dispatch(push("/fav"))} >
        <Badge badgeContent={favProducts ? (favProducts.length > 0) ?  favProducts.length : 0 : 0} color="primary">
            <FavoriteBorderIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <MenuIcon onClick={(e) => props.handleDrawerToggle(e)} />
      </IconButton>
   </>
  )
}

export default HeaderMenus;