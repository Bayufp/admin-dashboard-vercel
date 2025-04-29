export default function Users() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users Overview</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-6">Bayu Pradana</td>
              <td className="py-4 px-6">bayu@example.com</td>
              <td className="py-4 px-6">Admin</td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6">Ayu Putri</td>
              <td className="py-4 px-6">ayu@example.com</td>
              <td className="py-4 px-6">Editor</td>
            </tr>
            <tr>
              <td className="py-4 px-6">Rizky Maulana</td>
              <td className="py-4 px-6">rizky@example.com</td>
              <td className="py-4 px-6">Viewer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
