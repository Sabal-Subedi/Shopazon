import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import '../css/Product.css';
import { useStateValue } from '../context/BasketContext';

function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch ] = useStateValue();
    
    console.log("this is basket ===>", basket);
    const addToBasket = () =>{
        //dispatch item to data layer from here
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p><StarIcon /></p>
                    ))}
                </div>
            </div> 
            <img className="product__image"
                src={image}
                alt=""
            />     
            <button onClick={addToBasket}>Add To Basket</button>      
        </div>
    )
}

export default Product
