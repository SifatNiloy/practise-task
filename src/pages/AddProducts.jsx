
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Product added successfully!");
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error("Failed to add product!");
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add a Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
          <input
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            type="text"
            name="title"
            id="title"
            placeholder="Product Title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="brand">Brand</label>
          <input
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            type="text"
            name="brand"
            id="brand"
            placeholder="Brand Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price</label>
          <input
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            name="description"
            id="description"
            placeholder="Product Description"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image_url">Image URL</label>
          <input
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">Product ID</label>
          <input
            className="bg-gray-100 p-4 w-full border border-gray-300 rounded-lg"
            type="text"
            name="id"
            id="id"
            placeholder="Product ID"
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="btn mt-4 w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition duration-200"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
      
      <ToastContainer />
    </div>
  );
};

export default AddProducts;
