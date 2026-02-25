import React from 'react';
import Icon from '../ui/Icon';

export default function LanguagesForm({ cvData, setCvData }) {
    const handleUpdate = (id, field, value) => {
        const updated = cvData.languages.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setCvData({ ...cvData, languages: updated });
    };

    const handleAdd = () => {
        const newItem = { id: Date.now(), name: '', level: '' };
        setCvData({ ...cvData, languages: [...cvData.languages, newItem] });
    };

    const handleDelete = (id) => {
        setCvData({ ...cvData, languages: cvData.languages.filter(item => item.id !== id) });
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6 border-b pb-2 border-violet-100">
                <div className="flex items-center gap-2">
                    <Icon name="translate" size={20} color="#7c3aed" />
                    <h2 className="text-xl font-bold text-gray-800">Sprachen</h2>
                </div>
                <button onClick={handleAdd} className="text-violet-600 font-bold text-sm hover:text-violet-800 transition-colors">
                    + Hinzufügen
                </button>
            </div>

            <div className="space-y-3">
                {cvData.languages.map((lang) => (
                    <div key={lang.id} className="flex gap-3 items-center group">
                        <input
                            placeholder="Sprache"
                            className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-violet-500"
                            value={lang.name}
                            onChange={(e) => handleUpdate(lang.id, 'name', e.target.value)}
                        />
                        <select
                            className="w-1/3 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
                            value={lang.level}
                            onChange={(e) => handleUpdate(lang.id, 'level', e.target.value)}
                        >
                            <option value="">Niveau wählen</option>
                            <option value="Muttersprache">Muttersprache(C2)</option>
                            <option value="Verhandlungssicher(C1)">Verhandlungssicher(C1)</option>
                            <option value="Fließend(B2)">Fließend(B2)</option>
                            <option value="Gut(B1)">Gut(B1)</option>
                            <option value="Grundkenntnisse(A1/A2)">Grundkenntnisse(A1/A2)</option>
                        </select>
                        <button
                            onClick={() => handleDelete(lang.id)}
                            className="text-red-400 hover:text-red-600 transition-colors px-1"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}