import React from 'react';
import Icon from '../ui/Icon';

export default function SkillsForm({ cvData, setCvData }) {
    const handleUpdate = (id, field, value) => {
        const updated = cvData.skills.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setCvData({ ...cvData, skills: updated });
    };

    const handleAdd = () => {
        const newItem = { id: Date.now(), name: '', level: 50, appreciation: ''};
        setCvData({ ...cvData, skills: [...cvData.skills, newItem] });
    };

    const handleDelete = (id) => {
        setCvData({ ...cvData, skills: cvData.skills.filter(item => item.id !== id) });
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6 border-b pb-2 border-violet-100">
                <div className="flex items-center gap-2">
                    <Icon name="star" size={20} color="#7c3aed" />
                    <h2 className="text-xl font-bold text-gray-800">Expertise / Skills</h2>
                </div>
                <button onClick={handleAdd} className="text-violet-600 font-bold text-sm hover:text-violet-800 transition-colors">
                    + Hinzufügen
                </button>
            </div>

            <div className="space-y-4">
                {cvData.skills.map((skill) => (
                    <div key={skill.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative group">
                        <button
                            onClick={() => handleDelete(skill.id)}
                            className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Löschen
                        </button>

                        <div className="fley flex-col gap-3 items-center">
                            <div className="flex gap-3 items-center group">
                                <input
                                    placeholder="Fähigkeit (z.B. JavaScript)"
                                    className="p-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-violet-500"
                                    value={skill.name}
                                    onChange={(e) => handleUpdate(skill.id, 'name', e.target.value)}
                                />
                                <select
                                    className="w-1/3 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
                                    value={skill.appreciation}
                                    onChange={(e) => handleUpdate(skill.id, 'appreciation', e.target.value)}
                                >
                                    <option value="">Niveau wählen</option>
                                    <option value="Grundkentnisse">Grundkentnisse</option>
                                    <option value="gut">gut</option>
                                    <option value="sehr gut">sehr gut</option>
                                    <option value="ausgezeichnet">ausgezeichnet</option>
                                </select>
                            </div>
                            <div className="mt-3 pt-3">
                                <input
                                    type="range"
                                    min="0" max="100"
                                    className="flex-1 accent-violet-600"
                                    value={skill.level}
                                    onChange={(e) => handleUpdate(skill.id, 'level', parseInt(e.target.value))}
                                />
                                <span className="text-xs font-mono text-slate-500 w-8">{skill.level}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}