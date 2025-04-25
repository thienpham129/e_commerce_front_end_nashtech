const ProductPagination = ({ page, totalPages, handlePageClick }) => {
    return (
        <div className="flex justify-center items-center mt-4 space-x-2">
            <button
                onClick={() => handlePageClick(page - 1)}
                disabled={page === 0}
                className="px-2 py-1 border rounded disabled:opacity-50"
            >
                Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={`px-3 py-1 border rounded ${index === page ? "bg-blue-500 text-white" : "bg-white"}`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => handlePageClick(page + 1)}
                disabled={page === totalPages - 1}
                className="px-2 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default ProductPagination;