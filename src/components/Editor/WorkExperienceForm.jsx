export default function WorkExperienceForm({ cvData, setCvData }) {

    // Funktion zum Aktualisieren eines Feldes in einem bestimmten Eintrag
    const handleUpdate = (id, field, value) => {
        const updatedWork = cvData.workExperience.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setCvData({ ...cvData, workExperience: updatedWork });
    };

    // Neuen leeren Eintrag hinzufügen
    const handleAdd = () => {
        const newItem = { id: Date.now(), company: '', role: '', duration: '', description: '' };
        setCvData({ ...cvData, workExperience: [...cvData.workExperience, newItem] });
    };

    // Eintrag löschen
    const handleDelete = (id) => {
        const filteredWork = cvData.workExperience.filter(item => item.id !== id);
        setCvData({ ...cvData, workExperience: filteredWork });
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Berufserfahrung</h2>

            {cvData.workExperience.map((work) => (
                <div key={work.id} className="p-4 border rounded-lg mb-4 bg-gray-50 relative">
                    <button
                        onClick={() => handleDelete(work.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                    >
                        Löschen
                    </button>

                    <input
                        placeholder="Firma"
                        className="w-full p-2 mb-2 border rounded"
                        value={work.company}
                        onChange={(e) => handleUpdate(work.id, 'company', e.target.value)}
                    />
                    <input
                        placeholder="Position"
                        className="w-full p-2 mb-2 border rounded"
                        value={work.role}
                        onChange={(e) => handleUpdate(work.id, 'role', e.target.value)}
                    />
                    <input
                        placeholder="Zeitraum (z.B. 2020 - Heute)"
                        className="w-full p-2 mb-2 border rounded"
                        value={work.duration}
                        onChange={(e) => handleUpdate(work.id, 'duration', e.target.value)}
                    />
                    <textarea
                        placeholder="Beschreibung deiner Aufgaben"
                        className="w-full p-2 border rounded h-20"
                        value={work.description}
                        onChange={(e) => handleUpdate(work.id, 'description', e.target.value)}
                    />
                </div>
            ))}

            <button
                onClick={handleAdd}
                className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                + Erfahrung hinzufügen
            </button>
        </div>
    );
}