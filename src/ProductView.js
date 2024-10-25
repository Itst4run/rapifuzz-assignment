import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductView() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (productId) => {
        setCart((prevCart) => {
            const newQuantity = (prevCart[productId] || 0) + 1;
            return { ...prevCart, [productId]: newQuantity };
        });
    };
    console.log(cart,products)

    return (
        <div className="box">
            <h2>Product View</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-4">
                        <div className="card">
                            <img src={product.image} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">
    {product.title.length > 25 ? (
        <>
            {product.title.slice(0, 25) + '...'}
        </>
    ) : (
        <>
            {product.title}
        </>
    )}
</h5>
                                {/* <h5 className="card-title">{ product.title.length>100?   <>{product.title.slice(0,100) + '...'}</>: <>{product.title}</>}</h5> */}
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductView;
