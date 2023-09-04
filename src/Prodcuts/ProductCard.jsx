const ProductCard = ({ product }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={product.image} alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p className="text-xl font-semibold">$ {product?.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary btn-outline btn-block">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
