export default function EducationForm({ cvData, setCvData }) {
    const handleUpdate = (id, field, value) => {
        const updated = cvData.education.map(item => item.id === id ? { ...item, [field]: value } : item);
        setCvData({ ...cvData, education: updated });
    };

    const handleAdd = () => {
        const newItem = { id: Date.now(), school: '', degree: '', year: '' };
        setCvData({ ...cvData, education: [...cvData.education, newItem] });
    };

    const handleDelete = (id) => {
        setCvData({ ...cvData, education: cvData.education.filter(item => item.id !== id) });
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-xl font-bold text-gray-800">Bildung</h2>
            </div>
            {cvData.education.map((edu) => (
                <div key={edu.id} className="p-4 border rounded-lg mb-4 bg-gray-50 relative">
                    <div className="p-4 height-100 rounded-lg mb-4 bg-gray-50 relative">
                        <button
                            onClick={() => handleDelete(edu.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                        >
                            Löschen
                        </button>
                    </div>
                    <input placeholder="Schule / Uni" className="w-full p-2 mb-2 border rounded" value={edu.school}
                           onChange={(e) => handleUpdate(edu.id, 'school', e.target.value)}/>
                    <input placeholder="Abschluss" className="w-full p-2 mb-2 border rounded" value={edu.degree}
                           onChange={(e) => handleUpdate(edu.id, 'degree', e.target.value)}/>
                    <input placeholder="Zeitraum" className="w-full p-2 border rounded" value={edu.year}
                           onChange={(e) => handleUpdate(edu.id, 'year', e.target.value)}/>
                </div>
            ))}
            <button
                onClick={handleAdd}
                className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                + Bildung hinzufügen
            </button>
        </div>
    );
}