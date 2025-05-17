import { useState } from 'react';

export function UploadResume() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      alert(`Uploading: ${file.name}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-4" onClick={handleUpload}>Submit</button>
    </div>
  );
}