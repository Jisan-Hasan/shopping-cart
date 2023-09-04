import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
    addOneToCart,
    deleteFromCart,
    removeOneFromCart,
} from "../app/features/cart/cartSlice";

const CartCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img
                    className="lws-cartImage"
                    src={product.image}
                    alt="product"
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{product.name}</h4>
                    <p>
                        BDT{" "}
                        <span className="lws-cartPrice">{(product.price).toFixed(2)}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button
                        className="lws-incrementQuantity"
                        onClick={() => dispatch(removeOneFromCart(product.id))}
                        disabled={product.quantity === 1}
                    >
                        <FaMinus />
                    </button>
                    <span className="lws-cartQuantity">{product.quantity}</span>
                    <button
                        className="lws-decrementQuantity"
                        onClick={() => dispatch(addOneToCart(product.id))}
                    >
                        <FaPlus />
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">
                    BDT{" "}
                    <span className="lws-calculatedPrice">
                        {(product.price * product.quantity).toFixed(2)}
                    </span>
                </p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                    className="lws-removeFromCart"
                    onClick={() => dispatch(deleteFromCart(product.id))}
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CartCard;
