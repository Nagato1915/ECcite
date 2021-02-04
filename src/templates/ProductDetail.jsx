import React, {useState, useEffect, useCallback} from 'react';
import {db, FirebaseTimestamp} from '../firebase/index';
import { useSelector, useDispatch } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import HTMLReactParser from 'html-react-parser';
import {ImageSwiper, SizeTable} from '../components/Products';
import { addProductToCart, addFavProductToCart } from '../reducks/users/operations';



const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down('sm')]: {
      matgin: "0 auto 24p 0",
      height: 320,
      width: 320
    },
    [theme.breakpoints.up('sm')]: {
      margin: "0 auto",
      height: 400,
      width: 400,
    }
  },
  detail: {
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      matgin: "0 auto 16p 0",
      height: "auto",
      width: 320
    },
    [theme.breakpoints.up('sm')]: {
      margin: "0 auto",
      height: "auto",
      width: 400,
    }
  },
  price: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "red",
  }
}));


const ProductDetail = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const path = selector.router.location.pathname;
  const id = path.split("/product/")[1];

  const [product, setProduct] = useState(null);

  const returnCodeToBr = (text) => {
    if (text === "") {
      return text
    } else {
      return HTMLReactParser(text.replace(/\r?\n/g, '<br>'))
    }
  }

  useEffect(() => {
    db.collection('products').doc(id).get()
      .then(doc => {
        const data = doc.data();
        setProduct(data)
      })
  }, [])

const addProduct = useCallback((selectedSize) => {
  const timeStamp = FirebaseTimestamp.now();
  dispatch(addProductToCart({
    added_at: timeStamp,
    description: product.description,
    gender: product.gender,
    images: product.images,
    name: product.name,
    price: product.price,
    productId: product.id,
    quantity: 1,
    size: selectedSize
  }))
}, [product])

const addFavProduct = useCallback((selectedSize) => {
  const timeStamp = FirebaseTimestamp.now();
  dispatch(addFavProductToCart({
    added_at: timeStamp,
    description: product.description,
    gender: product.gender,
    images: product.images,
    name: product.name,
    price: product.price,
    productId: product.id,
    quantity: 1,
    size: selectedSize
  }))
}, [product])

  return(
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
              <ImageSwiper images={product.images} />
          </div>
          <div className={classes.detail}>
              <h2 className="product-name">{product.name}</h2>
              <p className={classes.price}>￥{product.price.toLocaleString()}</p>
              <p>{returnCodeToBr(product.description)}</p>
              <div className="module-spacer--small" />
              <SizeTable addFavProduct={addFavProduct} addProduct={addProduct} sizes={product.sizes} />
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetail;