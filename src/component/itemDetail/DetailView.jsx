import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Box, Typography, CircularProgress, Button, Grid} from '@mui/material';
import {makeStyles} from '@mui/styles'
import ProductDetail from './ProductDetail';

//component
import {getProductDetails} from '../../redux/action/productAction'
import ActionItem from './ActionItem';

const useStyles = makeStyles({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
       
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
});


const DetailView = ({match}) => {
const classes = useStyles();  
const {product} = useSelector(state => state.getProductDetails);
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
      }, [dispatch])
  
    return (
        <Box className={classes.component}>
        <Box></Box>
        { product && Object.keys(product).length &&
            <Grid container className={classes.container}> 
                <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={classes.greyTextColor} style={{marginTop: 5}}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <ProductDetail product={product} />
                </Grid>
            </Grid>
        }   
    </Box>
    )
}

export default DetailView
