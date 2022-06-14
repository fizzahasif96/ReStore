import { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import {Product} from '../../app/models/Product';
import { useAppDispatch, useAppSelector } from '../../app/store/ConfigureStore';
import { fetchProductsAsync, productSelectors } from './CatalogSlice';
import ProductList from './ProductList';


const Catalog = () => {

  const products = useAppSelector(productSelectors.selectAll)
  const {productsLoaded, status} = useAppSelector(state => state.catalog)
  const dispatch = useAppDispatch()


  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync())
  }, [productsLoaded, dispatch]);

  if(status.includes('pending')) return <LoadingComponent message='Loading Products...'/>

  return (
    <>
      <ProductList products = {products}/>
    </>
  )
}

export default Catalog