import { useParams } from 'react-router-dom';

export function ApplicantDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Applicant ID: {id}</h2>
      <p>Notes, resume preview, communication timeline here...</p>
    </div>
  );
}