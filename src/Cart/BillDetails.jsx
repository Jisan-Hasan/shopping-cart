import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const BillDetails = () => {
    const { cart } = useSelector((state) => state.cart);
    let subTotal = 0;
    if (cart) {
        subTotal = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }
    return (
        <div>
            <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                    Bill Details
                </h4>
                <div className="space-y-4">
                    {/* <!-- sub total --> */}
                    <div className="flex items-center justify-between">
                        <p>Sub Total</p>
                        <p>
                            BDT{" "}
                            <span className="lws-subtotal">
                                {subTotal.toFixed(2)}
                            </span>
                        </p>
                    </div>
                    {/* <!-- Discount --> */}
                    <div className="flex items-center justify-between">
                        <p>Discount</p>
                        <p>
                            BDT{" "}
                            <span className="lws-discount">
                                {(0).toFixed(2)}
                            </span>
                        </p>
                    </div>
                    {/* <!-- Total --> */}
                    <div className="flex items-center justify-between pb-4">
                        <p className="font-bold">TOTAL</p>
                        <p className="font-bold">
                            BDT{" "}
                            <span className="lws-total">
                                {subTotal.toFixed(2)}
                            </span>
                        </p>
                    </div>
                    <button className="placeOrderbtn">place order</button>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;
