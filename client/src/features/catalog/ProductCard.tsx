import { LoadingButton } from '@mui/lab';
import { Avatar, Card, Button, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/Product';
import { useAppDispatch, useAppSelector } from '../../app/store/ConfigureStore';
import { currencyFormat } from '../../app/util/util';
import { addBasketItemAsync, setBasket } from '../basket/BasketSlice';


interface Props {
    product : Product;
  }
const ProductCard = ({product} : Props) => {

  //const {setBasket} = useStoreContext()
  const dispatch = useAppDispatch();
  const {status} = useAppSelector(state => state.basket)
  // const [loading, setLoading] = useState(false);

  // function handleAddItem(productId : number){
  //   setLoading(true);
  //   agent.Basket.addItem(productId)
  //   .then(basket => dispatch(setBasket(basket)))
  //   .catch(error => console.log(error))
  //   .finally(() => setLoading(false));
  // }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
      avatar = {
          <Avatar sx={{bgcolor: 'secondary.main'}}>{product.name.charAt(0).toUpperCase()} </Avatar>
      }
      title = {product.name}
      titleTypographyProps = {{
        sx: {fontWeight: 'bold', color: 'primary.main'}
      }}
      />  
    <CardMedia
      sx = {{height: 140, backgroundSize : "contain", bgcolor: 'primary.light' }}
      image= {product.pictureUrl}
      title = {product.name}
    />
    <CardContent>
      <Typography gutterBottom color="secondary" variant="h5" component="div">
        {currencyFormat(product.price)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.brand} / {product.type}
      </Typography>
    </CardContent>
    <CardActions>
    <LoadingButton
        loading={status.includes('pendingAddItem' + product.id)}
        onClick={() => dispatch(addBasketItemAsync({productId: product.id}))}
        size="small" >
        Add to cart
    </LoadingButton>
      {/* <Button size="small">Add to cart</Button> */}
      <Button component={Link} to={`/catalog/${product.id}`} size="small" >View</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard