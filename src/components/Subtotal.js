import React, { useState } from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/BasketContext';
import { getBasketTotal } from '../reducer/reducer';

function Subtotal() {

    const [{basket}, dispatch ] = useStateValue();
         
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText= {(value)=>(
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>
                                {value}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </>
                )}
                decimalScale ={2}
                value = {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

//to use currency format use command => npm install react-currency-format
//it helps to render money value