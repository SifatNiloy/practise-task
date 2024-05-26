/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

 return (
  <div className="card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">

      <figure className="relative h-48 w-full overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="object-cover h-full w-full"
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
            className="btn bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
          >
            See details
          </Link>
          <Link
            to={`edit/${id}`}
            className="btn bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
