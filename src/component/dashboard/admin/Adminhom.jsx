

const Adminhom = () => {
    return (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Members</h3>
            <p className="text-2xl font-bold text-gray-800">1,200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Active Sessions</h3>
            <p className="text-2xl font-bold text-gray-800">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Completed Workouts</h3>
            <p className="text-2xl font-bold text-gray-800">2,400</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Active Trainers</h3>
            <p className="text-2xl font-bold text-gray-800">30</p>
          </div>
        </div>
  
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h4 className="text-xl font-semibold text-gray-700">Recent Activity</h4>
          <ul className="mt-4">
            <li>New Member Signup: John Doe</li>
            <li>Completed Workout: Yoga - 8:00 AM</li>
            <li>Trainer Feedback: Mike</li>
          </ul>
        </div>
        </div>
    );
};

export default Adminhom;