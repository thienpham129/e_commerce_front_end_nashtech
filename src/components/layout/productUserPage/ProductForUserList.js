import { useEffect, useState } from "react"
import { listProducts } from "../../../service/ProductService";
import { Link } from "react-router-dom";

const ProductForUserList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        listProducts().then((response) => {
            setProducts(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Product List For User</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.productId}>
                        <div className="card h-100 shadow-sm">
                            <Link to={`/user/products/${product.productId}`}>
                                <img
                                    src={`/images/big/${product.imageUrl}`}
                                    className="card-img-top"
                                    alt={product.productName}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                            </Link>
                            <div className="card-body">
                                <Link to={`/user/products/${product.productId}`}>
                                    <h5 className="card-title">{product.productName}</h5>
                                </Link>
                                <p className="card-text">{product.price.toLocaleString()} VND</p>
                                <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ProductForUserList;