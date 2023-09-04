import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector((state) => state.cart);
    let totalCartItem = 0;

    if (cart) {
        totalCartItem = cart.reduce((total, item) => total + item.quantity, 0);
    }

    console.log(totalCartItem);
    return (
        <div className="navbar bg-gray-800 text-white md:px-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Shopping
                </Link>
            </div>

            <div className="navbar-end">
                <Link
                    to="/cart"
                    className="bg-blue-300  rounded-lg p-3 flex items-center gap-2 text-black font-semibold"
                >
                    <BsCart2 />
                    {totalCartItem}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
