import { useEffect, useState } from "react"
import { getProductByCategory, listProducts } from "../../../service/ProductService";
import { Link } from "react-router-dom";
import { listCategories } from "../../../service/CategoryService";

const ProductForUserList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCateogories] = useState([]);

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, [])

    const getAllProducts = () => {
        listProducts().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const getAllCategories = () => {
        listCategories().then((response) => {
            setCateogories(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const handleCategoryClick = (categoryId) => {
        if (categoryId === 0) {
            getAllProducts();
        } else {
            getProductByCategory(categoryId).then((response) => {
                setProducts(response.data)
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Product List For User</h2>
            <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
                <button className="btn btn-outline-primary" onClick={() => handleCategoryClick(0)}>
                    All
                </button>
                {categories.map(category => (
                    <button key={category.categoryId}
                        className="btn btn-outline-primary"
                        onClick={() => handleCategoryClick(category.categoryId)}
                    >
                        {category.categoryName}
                    </button>
                ))}
            </div>
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