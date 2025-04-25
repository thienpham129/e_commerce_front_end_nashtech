import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAverageRatingByProductId, getProductById } from "../../../service/ProductService";
import RenderStars from "../../common/product/RenderStar";
import { addOrUpdateReview, deleteOwnByUser, getAllReviewByProduct } from "../../../service/ReviewService";
import Header from "../../common/header/Header";
import StarRating from "../../common/product/StarRating";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [averageRatings, setAverageRatings] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const currentUserName = localStorage.getItem("userName");
    console.log("setRating", setRating);

    useEffect(() => {
        // lấy review
        getAllReviewByProduct(productId)
            .then(res => setReviews(res.data))
            .catch(console.error);

        // lấy chi tiết product
        getProductById(productId)
            .then(res => setProduct(res.data))
            .catch(console.error);

        // lấy rating trung bình
        getAverageRatingByProductId(productId)
            .then(res => setAverageRatings(res.data))
            .catch(console.error);
    }, [productId]);

    const handleDelete = (reviewId) => {
        deleteOwnByUser(reviewId)
            .then(() => getAllReviewByProduct(productId).then(res => setReviews(res.data)))
            .catch(console.error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrUpdateReview(productId, { rating, comment })
            .then(() => {
                setRating(0);
                setComment('');
                return getAllReviewByProduct(productId);
            })
            .then(res => setReviews(res.data))
            .catch(console.error);
    };


    if (!product) return <p>Loading...</p>

    return (
        <>
            <Header />
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
                            <p className="text-gray-700 mb-2">
                                <strong>Đánh giá trung bình:</strong>
                                <RenderStars rating={averageRatings} />
                            </p>
                        </div>
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Đánh giá</h3>

                            {reviews.map((r) => (
                                <div key={r.id} className="border-b py-2">
                                    <p className="font-medium">
                                        {r.userName} • {r.rating}⭐
                                    </p>
                                    <p>{r.comment}</p>
                                    {/* Hiển thị nút xoá nếu là review của user hiện tại */}
                                    {currentUserName === r.userName && (
                                        <button
                                            onClick={() => handleDelete(r.id)}
                                            className="text-sm text-red-500"
                                        >
                                            Xoá
                                        </button>
                                    )}
                                </div>
                            ))}

                            <form onSubmit={handleSubmit} className="mt-4 space-y-2">
                                <label className="block font-medium">Đánh giá của bạn:</label>
                                <StarRating rating={rating} setRating={setRating} />
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Bình luận..."
                                    className="w-full border rounded px-2 py-1"
                                    rows={3}
                                />
                                <button className="bg-blue-600 text-white px-4 py-1 rounded">
                                    Gửi
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;