const Accordion = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-4xl text-indigo-600">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="radio"
            name="my-accordion-2"
            id="accordion-1"
            className="hidden"
            defaultChecked
          />
          <label
            htmlFor="accordion-1"
            className="collapse-title text-xl font-semibold p-4 cursor-pointer flex items-center justify-between bg-indigo-500 text-white"
          >
            What is your return policy?
          </label>
          <div className="collapse-content p-4 text-gray-700 bg-gray-100">
            <p>
              Our return policy allows you to return shoes within 30 days of
              purchase. The shoes must be in original condition, unworn, and in
              the original packaging. To initiate a return, please contact our
              customer service team.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="radio"
            name="my-accordion-2"
            id="accordion-2"
            className="hidden"
          />
          <label
            htmlFor="accordion-2"
            className="collapse-title text-xl font-semibold p-4 cursor-pointer flex items-center justify-between bg-indigo-500 text-white"
          >
            How do I track my order?
          </label>
          <div className="collapse-content p-4 text-gray-700 bg-gray-100">
            <p>
              Once your order is shipped, you will receive an email with the
              tracking information. You can use the provided tracking number on
              the couriers website to monitor the status of your shipment. If
              you have any issues, feel free to contact our support team.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="radio"
            name="my-accordion-2"
            id="accordion-3"
            className="hidden"
          />
          <label
            htmlFor="accordion-3"
            className="collapse-title text-xl font-semibold p-4 cursor-pointer flex items-center justify-between bg-indigo-500 text-white"
          >
            What payment methods do you accept?
          </label>
          <div className="collapse-content p-4 text-gray-700 bg-gray-100">
            <p>
              We accept various payment methods including Visa, MasterCard,
              American Express, PayPal, and Apple Pay. All payments are
              processed securely to ensure your personal information is
              protected.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="radio"
            name="my-accordion-2"
            id="accordion-4"
            className="hidden"
          />
          <label
            htmlFor="accordion-4"
            className="collapse-title text-xl font-semibold p-4 cursor-pointer flex items-center justify-between bg-indigo-500 text-white"
          >
            Do you offer international shipping?
          </label>
          <div className="collapse-content p-4 text-gray-700 bg-gray-100">
            <p>
              Yes, we offer international shipping to most countries. Shipping
              fees and delivery times vary depending on the destination. Please
              refer to our shipping policy for detailed information on
              international orders.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input
            type="radio"
            name="my-accordion-2"
            id="accordion-5"
            className="hidden"
          />
          <label
            htmlFor="accordion-5"
            className="collapse-title text-xl font-semibold p-4 cursor-pointer flex items-center justify-between bg-indigo-500 text-white"
          >
            How can I contact customer service?
          </label>
          <div className="collapse-content p-4 text-gray-700 bg-gray-100">
            <p>
              You can contact our customer service team via email at
              support@shoeshop.com or by phone at (123) 456-7890. Our team is
              available Monday to Friday from 9 AM to 6 PM EST. We are here to
              help with any questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
