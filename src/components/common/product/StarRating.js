const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => {
                        console.log("Clicked star:", star);
                        setRating(star)
                    }}
                    className={`cursor-pointer text-2x1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;