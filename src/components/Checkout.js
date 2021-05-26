import React from 'react';
import { useStateValue } from '../context/BasketContext';
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img classsName="checkout__ad"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYauxDZx8a1uvIoO0j64ebXiQmS9uzpEmn_A&usqp=CAU" 
                 alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map(b=>(
                    
                            <CheckoutProduct 
                                id= {b.id} 
                                price= {b.price}
                                rating = {b.rating} 
                                title = {b.title}
                                image={b.image}
                            />
                    ))}


                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
