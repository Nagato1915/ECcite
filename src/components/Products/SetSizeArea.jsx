import React, {useState, useCallback, useEffect } from 'react';
import {TextInput} from '../UIkit';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/styles";

import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  iconCell: {
    width: 48,
    height: 48,
    padding: 0
  },
  checkIcon: {
    float: 'right'
  }
})

const SetSizeArea = (props) => {
  const classes = useStyles()

  const [index, setIndex] = useState(0),
        [size, setSize] = useState(""),
        [quantity, setQuantity] = useState(0);

  const inputSize = useCallback((e) => {
    setSize(e.target.value)
  }, [setSize]);

  const inputQuantity = useCallback((e) => {
    setQuantity(e.target.value)
  }, [setQuantity]);


  const addSize = (index, size, quantity) => {
    if (size === "" || quantity === 0 ) {
      alert("Required input is blank")
    } else {
      if (index === props.sizes.length) {
        props.setSizes(prevState => [...prevState, {size: size, quantity: quantity}]);
        setIndex(index + 1);
        setSize("");
        setQuantity(0);
      } else {
        const newSizes = props.sizes;
        newSizes[index] = {size: size, quantity: quantity};
        props.setSizes(newSizes);
        setIndex(newSizes.length);
        setSize("");
        setQuantity(0)
      }
    }
    };

    const editSize = (index, size, quantity) => {
      setIndex(index);
      setSize(size);
      setQuantity(quantity);
    };

    const deleteSize = (index) => {
      const newSizes = props.sizes.filter((item, i) => i !== index)
      props.setSizes(newSizes);
    };

    useEffect(() => {
      setIndex(props.sizes.length)
    }, [props.sizes.length]);
  
  return(
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>サイズ</TableCell>
              <TableCell>数量</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 && (
              props.sizes.map((item, i) => (
                <TableRow key={item.size}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell} onClick={() => editSize(i, item.size, item.quantity)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell} onClick={() => deleteSize(i)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div>
          <TextInput fullwidth={false} label={"サイズ"} multiline={false} required={true} onChange={inputSize} rows={1} value={size} type={"text"} />
          <TextInput fullwidth={false} label={"数量"} multiline={false} required={true} onChange={inputQuantity} rows={1} value={quantity} type={"number"} />
        </div>
        <IconButton className={classes.checkIcon} onClick={() => addSize(index, size, quantity)}> 
          <CheckCircleIcon />
        </IconButton>

      </TableContainer>
    </div>
  )
}

export default SetSizeArea;