const Certificate = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Certificates</h1>
      <p className="text-gray-700 mb-6">
        Earn certificates to showcase your skills and knowledge.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">HTML Certificate</h2>
          <p className="text-sm text-gray-600">
            Demonstrate your ability to build structured web pages.
          </p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Start Exam
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">CSS Certificate</h2>
          <p className="text-sm text-gray-600">
            Showcase your skills in styling and layout design.
          </p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Start Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
