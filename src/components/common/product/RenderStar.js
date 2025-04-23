import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const RenderStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={"full-" + i} className="text-yellow-400" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={"empty-" + i} className="text-yellow-400" />
            ))}
        </>
    );
};

export default RenderStars;