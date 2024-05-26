import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 m-auto">
      <figure className="relative h-48 w-full overflow-hidden">
        <img src={image_url} alt={title} className="object-cover h-full w-full transition-transform duration-300 hover:scale-110" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold text-gray-800">{title}</h2>
        <h3 className="text-md font-medium text-gray-600">{brand}</h3>
        <h3 className="text-md font-medium text-gray-600">${price}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="card-actions flex justify-center mt-4">
          <Link
            to={`/products/${id}`}
            className="btn bg-orange-400 text-white px-5 py-3 rounded-full text-md font-semibold hover:bg-orange-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
