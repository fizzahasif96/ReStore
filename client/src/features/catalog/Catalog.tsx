import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Pagination, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import AppPagination from '../../app/components/AppPagination';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import RadioButtonGroup from '../../app/components/RadioButtonGroup';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Product } from '../../app/models/Product';
import { useAppDispatch, useAppSelector } from '../../app/store/ConfigureStore';
import { fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductParams } from './CatalogSlice';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';


const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price - High to low' },
  { value: 'price', label: 'Price - Low to high' },
]
const Catalog = () => {

  const products = useAppSelector(productSelectors.selectAll)
  const { productsLoaded, status, filtersLoaded, brands, types, productParams, metaData } = useAppSelector(state => state.catalog)
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync())
    if (!filtersLoaded) dispatch(fetchFilters())
  }, [productsLoaded, dispatch, filtersLoaded]);

  if (!filtersLoaded) return <LoadingComponent message='Loading Products...' />

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={3}>
          <Paper sx={{ mb: 3 }}>
            <ProductSearch />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
            <RadioButtonGroup
              selectedValue={productParams.orderBy}
              options={sortOptions}
              onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
            />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
            <CheckboxButtons
              items={brands}
              checked={productParams.brands}
              onChange={(items: string[]) => dispatch(setProductParams({ brands: items }))}
            />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }}>
            <CheckboxButtons
              items={types}
              checked={productParams.types}
              onChange={(items: string[]) => dispatch(setProductParams({ types: items }))}
            />
          </Paper>
        </Grid>
        <Grid item xs={9}><ProductList products={products} /></Grid>
        <Grid item xs={3} />
        <Grid item xs={9} sx={{mb: 2}}>
          {metaData &&
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))}
            />}
        </Grid>
      </Grid>

    </>
  )
}

export default Catalog