import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import {Product} from '../../app/models/Product';
import ProductList from './ProductList';


const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
    .then(products => setProducts(products))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, []);

  if(loading) return <LoadingComponent message='Loading Products...'/>

  return (
    <>
      <ProductList products = {products}/>
    </>
  )
}

export default Catalog