/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onDelete(id);
          toast.success("Product deleted successfully!");
        })
        // .catch((error) => {
        //   toast.error("Failed to delete product.");
        // });
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 ${
          isHovered ? 'hover:scale-105 shadow-2xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className="relative h-48 w-full overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold text-gray-800">{title}</h2>
          <h3 className="text-md font-medium text-gray-600">{brand}</h3>
          <h3 className="text-md font-medium text-gray-600">${price}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="card-actions flex justify-end space-x-2 mt-4">
            <Link
              to={`/products/${id}`}
              className="btn bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors duration-300"
            >
              See details
            </Link>
            <Link
              to={`edit/${id}`}
              className="btn bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-300"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="btn bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCardDashboard;
