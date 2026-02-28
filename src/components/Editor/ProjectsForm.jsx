export default function ProjectsForm({ cvData, setCvData }) {
    const handleUpdate = (id, field, value) => {
        const updated = cvData.projects.map(item => item.id === id ? { ...item, [field]: value } : item);
        setCvData({ ...cvData, projects: updated });
    };

    const handleAdd = () => {
        const newItem = { id: Date.now(), title: '', description: '', link: '' };
        setCvData({ ...cvData, projects: [...cvData.projects, newItem] });
    };

    const handleDelete = (id) => {
        setCvData({ ...cvData, projects: cvData.projects.filter(item => item.id !== id) });
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-xl font-bold text-gray-800">Projekte</h2>
            </div>
            {cvData.projects.map((proj) => (
                <div key={proj.id} className="p-4 border rounded-lg mb-4 bg-gray-50 relative">
                    <div className="p-4 height-100 rounded-lg mb-4 bg-gray-50 relative">
                        <button
                            onClick={() => handleDelete(proj.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                        >
                            Löschen
                        </button>
                    </div>
                    <input placeholder="Projekt Titel" className="w-full p-2 mb-2 border rounded" value={proj.title}
                           onChange={(e) => handleUpdate(proj.id, 'title', e.target.value)}/>
                    <input placeholder="Link (optional)" className="w-full p-2 mb-2 border rounded" value={proj.link}
                           onChange={(e) => handleUpdate(proj.id, 'link', e.target.value)}/>
                    <textarea placeholder="Beschreibung" className="w-full p-2 border rounded h-16"
                              value={proj.description}
                              onChange={(e) => handleUpdate(proj.id, 'description', e.target.value)}/>
                </div>
            ))}
            <button
                onClick={handleAdd}
                className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                + Projekte hinzufügen
            </button>
        </div>
    );
}