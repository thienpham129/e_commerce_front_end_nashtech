import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getProductById } from "../../../service/ProductService";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(productId).then((resposne) => {
            setProduct(resposne.data);
        }).catch(error => {
            console.log(error);
        });
    }, [productId]);

    if (!product) return <p>Loading...</p>

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 flex justify-center items-center">
                        <img
                            src={`/images/small/${product.imageUrl}`}
                            alt={product.productName}
                            className="w-48 h-auto object-cover rounded-xl shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>
                        <p className="text-lg text-gray-800 mb-2">
                            <strong>Giá:</strong> {product.price.toLocaleString()} VND
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Mô tả:</strong> {product.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Số lượng còn:</strong> {product.quantity}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;