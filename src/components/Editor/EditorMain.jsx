import React from 'react';
import WorkExperienceForm from './WorkExperienceForm';

export default function EditorMain({ cvData, setCvData }) {

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setCvData(prev => ({
            ...prev,
            personal: { ...prev.personal, [name]: value }
        }));
    };

    return (
        <div className="p-8 space-y-12 max-w-2xl mx-auto">
            {/* TITEL DES EDITORS */}
            <header>
                <h1 className="text-3xl font-extrabold text-gray-900">CV Konfigurator</h1>
                <p className="text-gray-500 mt-1">Fülle deine Daten aus und wähle dein Design.</p>
            </header>

            <section className="space-y-4">
                <div className="flex items-center gap-2 border-b pb-2">
                    <span className="text-xl">👤</span>
                    <h2 className="text-xl font-bold text-gray-800">Persönliche Infos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vollständiger Name</label>
                        <input
                            name="name"
                            value={cvData.personal.name}
                            onChange={handlePersonalChange}
                            placeholder="z.B. Clint Eastwood"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                        <input
                            name="email"
                            type="email"
                            value={cvData.personal.email}
                            onChange={handlePersonalChange}
                            placeholder="name@beispiel.de"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input
                            name="phone"
                            value={cvData.personal.phone}
                            onChange={handlePersonalChange}
                            placeholder="+49 123 456789"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-2 border-b pb-2 mb-4">
                    <span className="text-xl">💼</span>
                    <h2 className="text-xl font-bold text-gray-800">Berufserfahrung</h2>
                </div>
                <WorkExperienceForm cvData={cvData} setCvData={setCvData} />
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-6">
                <div className="flex items-center gap-2 border-b border-blue-200 pb-2">
                    <span className="text-xl"> </span>
                    <h2 className="text-xl font-bold text-blue-900">Erscheinungsbild</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-2">Akzentfarbe</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="color"
                                value={cvData.settings.primaryColor}
                                onChange={(e) => setCvData(prev => ({
                                    ...prev,
                                    settings: { ...prev.settings, primaryColor: e.target.value }
                                }))}
                                className="h-10 w-10 cursor-pointer rounded-md border-none"
                            />
                            <span className="text-sm font-mono text-blue-700 uppercase tracking-wider">
                {cvData.settings.primaryColor}
              </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-2">Lebenslauf Template</label>
                        <select
                            value={cvData.settings.templateId}
                            onChange={(e) => setCvData(prev => ({
                                ...prev,
                                settings: { ...prev.settings, templateId: e.target.value }
                            }))}
                            className="w-full p-2.5 bg-white border border-blue-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                        >
                            <option value="t1">Modern Professional (T1)</option>
                            <option value="t2">Classic Executive (T2) </option>
                            <option value="t3">Minimalist Clean (T3)</option>
                        </select>
                    </div>
                </div>
            </section>

            <div className="pt-6">
                <p className="text-center text-xs text-gray-400 italic">
                    Alle Änderungen werden in Echtzeit in der Vorschau übernommen.
                </p>
            </div>
        </div>
    );
}