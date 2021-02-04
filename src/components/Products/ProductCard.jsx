import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NoImage from '../../assets/img/no_image.png';
import {push} from 'connected-react-router';
import { useDispatch } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {deleteProduct} from "../../reducks/products/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 32px)"
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(33.3333% - 32px)"
    },
  },
  content: {
    display: "flex",
    padding: "16px",
    position: "relative",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16
    }
  },
  media: {
    height: 0,
    paddingTop: "100%",
    cursor: "pointer",
    transition: "all .3s",
    "&:hover": {
      opacity: .6
    }
  },
  price: {
    color: "#332b2a",
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    position: "absolute",
    right: "0rem"
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const images = (props.images.length > 0) ? props.images : [{path: NoImage}]
  const price = props.price.toLocaleString();


  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return(
    <Card className={classes.root}>
      <div className="p-media-box">
      <CardMedia 
      onClick={() => dispatch(push("/product/" + props.id))}
      className={classes.media} 
      image={images[0].path} 
      />
      </div>
      <CardContent className={classes.content} >
        <div onClick={() => dispatch(push("/product/" + props.id))} >
          <Typography color="textSecondary" component="p">{props.name}</Typography>
          <Typography className={classes.price} color="textSecondary" component="p">¥{price}</Typography>
        </div>
        <IconButton onClick={handleClick} className={classes.button}>
          <MoreVertIcon />
        </IconButton>
        <Menu 
        anchorEl={anchorEl} 
        keepMounted 
        open={Boolean(anchorEl)} 
        onClose={handleClose}>
          <MenuItem 
            onClick={() => {
            dispatch(push("/product/edit/" + props.id))
            handleClose()
          }}
          >編集する</MenuItem>
          <MenuItem onClick={() => {
            dispatch(deleteProduct(props.id))
            handleClose()
            }}>削除する</MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}

export default ProductCard