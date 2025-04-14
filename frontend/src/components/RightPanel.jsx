const RightPanel = () => {
  return (
    <aside className="w-72 bg-white border-l p-4 hidden lg:block">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-2 flex items-center justify-center font-bold">
          MP
        </div>
        <p className="font-semibold">Mukesh Pathak</p>
        <small className="text-gray-500">Open profile</small>
      </div>

      <button className="w-full bg-purple-500 text-white py-2 rounded mb-4">
        Upgrade to Plus
      </button>

      <div className="bg-yellow-100 p-3 rounded mb-4">
        <p>
          ⚡ Streak: <strong>1 day</strong>
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Activity Score</h4>
        <div className="grid grid-cols-4 gap-2 text-center text-sm text-gray-600">
          <div>
            📘
            <br />0
          </div>
          <div>
            📝
            <br />0
          </div>
          <div>
            ❓<br />0
          </div>
          <div>
            🎯
            <br />0
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
