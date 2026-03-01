import React from 'react';
import {templatesIds} from '../Preview/TemplatesMap.js'
import WorkExperienceForm from './WorkExperienceForm';
import LanguagesForm from './LanguagesForm';
import EducationForm from './EducationForm';
import ProjectsForm from './ProjectsForm';
import ImageUpload from './ImageUpload';
import SkillsForm from './SkillsForm';
import Icon from '../ui/Icon';

export default function EditorMain({ cvData, setCvData }) {

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setCvData(prev => ({
            ...prev,
            personal: { ...prev.personal, [name]: value }
        }));
    };

    return (
        <div className="min-h-full bg-slate-50/50">
            <header className="p-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon name="file-document-box" size={24} color="white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">CV Builder</h1>
                </div>
                <p className="text-violet-100 text-sm">Erstelle deinen professionellen Lebenslauf in Echtzeit.</p>
            </header>

            <div className="p-8 space-y-8 max-w-3xl mx-auto">

                <section className="bg-white p-6 rounded-2xl shadow-sm border border-violet-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
                    <div className="flex items-center gap-2 mb-6">
                        <Icon name="palette" size={20} color="#7c3aed" />
                        <h2 className="text-lg font-bold text-slate-800">Design & Layout</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Akzentfarbe</label>
                            <div className="flex items-center gap-3 p-2 border border-slate-200 rounded-xl hover:border-violet-300 transition-colors">
                                <input
                                    type="color"
                                    value={cvData.settings.primaryColor}
                                    onChange={(e) => setCvData(prev => ({
                                        ...prev,
                                        settings: { ...prev.settings, primaryColor: e.target.value }
                                    }))}
                                    className="h-8 w-12 cursor-pointer rounded border-none"
                                />
                                <span className="text-sm font-mono text-slate-600">{cvData.settings.primaryColor}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Template Stil</label>
                            <select
                                value={cvData.settings.templateId}
                                onChange={(e) => setCvData(prev => ({
                                    ...prev,
                                    settings: {...prev.settings, templateId: e.target.value}
                                }))}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm focus:ring-2 focus:ring-violet-500 outline-none appearance-none cursor-pointer"
                            >
                                <option value="t1">{templatesIds.t1.name}</option>
                                <option value="t2">{templatesIds.t2.name}</option>
                                <option value="t3">{templatesIds.t3.name}</option>
                                <option value="t4">{templatesIds.t4.name}</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-6">
                        <Icon name="account-circle" size={20} color="#7c3aed" />
                        <h2 className="text-lg font-bold text-slate-800">Persönliche Informationen</h2>
                    </div>

                    <ImageUpload cvData={cvData} setCvData={setCvData} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="text-xs font-medium text-slate-400 mb-1 block">Vollständiger Name</label>
                            <input
                                name="name"
                                value={cvData.personal.name}
                                onChange={handlePersonalChange}
                                placeholder="z.B. Clint Eastwood"
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="text-xs font-medium text-slate-400 mb-1 block">Gesuchte Stelle</label>
                            <input
                                name="jobTitle"
                                value={cvData.personal.jobTitle}
                                onChange={handlePersonalChange}
                                placeholder="z.B. Werkstudent Software Entwickler"
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-1 block">E-Mail</label>
                            <input
                                name="email"
                                value={cvData.personal.email}
                                onChange={handlePersonalChange}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-1 block">Telefon</label>
                            <input
                                name="phone"
                                value={cvData.personal.phone}
                                onChange={handlePersonalChange}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="text-xs font-medium text-slate-400 mb-1 block">Straße & Hausnummer</label>
                            <input
                                name="address"
                                value={cvData.personal.address}
                                onChange={handlePersonalChange}
                                placeholder="Beispielstraße 12"
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label className="text-xs font-medium text-slate-400 mb-1 block">PLZ & Stadt</label>
                            <input
                                name="zipCode"
                                value={cvData.personal.zipCode}
                                onChange={handlePersonalChange}
                                placeholder="12345 Berlin"
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-violet-500 outline-none"
                            />
                        </div>
                    </div>
                </section>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <WorkExperienceForm cvData={cvData} setCvData={setCvData}/>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <EducationForm cvData={cvData} setCvData={setCvData}/>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <ProjectsForm cvData={cvData} setCvData={setCvData}/>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <SkillsForm cvData={cvData} setCvData={setCvData}/>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <LanguagesForm cvData={cvData} setCvData={setCvData}/>
                    </div>
                </div>

                <footer className="py-10 text-center">
                    <p className="text-slate-400 text-xs tracking-widest uppercase"> Designed by Clint - Softwaredev
                        @{new Date().getFullYear()}</p>
                    <p className="text-slate-400 text-xs tracking-widest uppercase"> All rights reserved</p>
                </footer>
            </div>
        </div>
    );
}