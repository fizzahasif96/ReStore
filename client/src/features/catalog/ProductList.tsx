import React from 'react'
import ProductCard from './ProductCard'
import {Product} from '../../app/models/Product';
import { Grid } from '@mui/material';


interface Props {
    products : Product[];
  }
  
const ProductList = ({products}: Props) => {    
  return (
    <Grid container spacing = {4}>
    {products.map(product => (
      <Grid item xs={3} key = {product.id}>
        <ProductCard product = {product} />
        {/* <ListItemAvatar>
            <Avatar src = {product.pictureUrl} />
        </ListItemAvatar>
        <ListItemText>{product.name} - {product.price}</ListItemText> */}
        </Grid>
    ))}
  </Grid>
  )
}

export default ProductList