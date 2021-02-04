import React, {useCallback} from 'react';
import List from '@material-ui/core/List';
import { getFavProductsInCart } from '../reducks/users/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FavListItem } from '../components/Products';
import { PrimaryButton, GreyButton } from '../components/UIkit';
import { push } from 'connected-react-router';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      widht: "100%",
      maxWidth: 512,
      margin: "0 auto"
    }
  })

const FavList = () => {
    const selector = useSelector((state) => state);
    const favProducts = getFavProductsInCart(selector);
    const dispatch = useDispatch()

    const classes = useStyles()

    const backToHome = useCallback(() => {
      dispatch(push("/"))
    }, [])

    return( 
      <section className="c-section-wrapin">
        <h2 className="page-ttl">
          お気に入りの商品
        </h2>
        <List className={classes.root}>
          {favProducts.length > 0 && (
            favProducts.map(product => <FavListItem key={product.favId} product={product} /> )
          )}
        </List>
        <div className="module-spacer--medium" />
        <GreyButton label={"ショッピングを続ける"} onClick={backToHome} />
      </section>

    )
}

export default FavList