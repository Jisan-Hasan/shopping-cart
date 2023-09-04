import { useSelector } from "react-redux";
import "../App.css";
import BillDetails from "./BillDetails";
import CartCard from "./CartCard";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const sortedCart = [...cart].sort((a, b) => a.id - b.id);

    console.log(cart);
    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {/* <!-- Cart Item --> */}
                        {sortedCart?.map((product) => (
                            <CartCard product={product} key={product.id} />
                        ))}
                        {/* <!-- Cart Items Ends --> */}
                    </div>

                    {/* <!-- Bill Details --> */}
                    <BillDetails />
                </div>
            </div>
        </main>
    );
};

export default Cart;
