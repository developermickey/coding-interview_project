const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to W3Schools, Mukesh</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Recommended: HTML</h2>
          <p className="text-sm text-gray-500">Start learning HTML</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Recommended: CSS</h2>
          <p className="text-sm text-gray-500">Start learning CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
