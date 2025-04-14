const Tutorial = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tutorials</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">HTML Tutorial</h2>
          <p className="text-gray-600 text-sm">
            Learn the basics of HTML and how to build web pages.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">CSS Tutorial</h2>
          <p className="text-gray-600 text-sm">
            Style your websites with beautiful and responsive layouts.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">JavaScript Tutorial</h2>
          <p className="text-gray-600 text-sm">
            Add interactivity and logic to your websites.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">React Tutorial</h2>
          <p className="text-gray-600 text-sm">
            Learn how to build modern UIs with reusable components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
