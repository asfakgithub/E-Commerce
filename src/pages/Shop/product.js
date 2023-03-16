import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id]

    return (
        <div className="product">
            <img src={productImage} alt={"Images"}/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <h6 className="price"> ${price}</h6>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add to cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
            </button>
        </div>
    );
};