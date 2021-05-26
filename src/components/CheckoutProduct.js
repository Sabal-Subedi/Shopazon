import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import '../css/CheckoutProduct.css';
import { useStateValue } from '../context/BasketContext';

function CheckoutProduct({id, price, image, rating, title}) {
    const [{basket}, dispatch ] = useStateValue();

    const removefrombasket = () =>{
        console.log('removing...');
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className= "checkoutProduct">
            <img ClassName="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="div checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p><StarIcon /></p>
                    ))}
                </div>
                <button onClick={removefrombasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
