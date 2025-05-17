import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Recruiter Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button onClick={() => navigate('/upload')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Upload Resume
        </button>
        <button onClick={() => navigate('/schedule')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Schedule Interview
        </button>
      </div>
    </div>
  );
}