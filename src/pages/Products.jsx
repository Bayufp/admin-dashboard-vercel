export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Product A
          </h2>
          <p className="text-gray-600">This is a description for Product A.</p>
          <p className="text-green-600 font-bold mt-2">$25</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Product B
          </h2>
          <p className="text-gray-600">This is a description for Product B.</p>
          <p className="text-green-600 font-bold mt-2">$40</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Product C
          </h2>
          <p className="text-gray-600">This is a description for Product C.</p>
          <p className="text-green-600 font-bold mt-2">$55</p>
        </div>
      </div>
    </div>
  );
}
