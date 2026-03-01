import React from 'react';
import {templatesIds} from './TemplatesMap.js'

export default function PreviewMain({ cvData }) {
    const templates = templatesIds;

    const SelectedTemplate = templates[cvData.settings.templateId] || ModernTemplate;

    return (
        <div id="cv-preview" className="flex flex-col items-center">
            <div
                id="cv-preview"
                className="bg-white shadow-2xl overflow-hidden mb-10 transition-all duration-300"
                style={{
                    width: '100%',
                    maxWidth: '100%',
                    transform: 'scale(1.0)',
                    transformOrigin: 'top center'
                }}
            >
                <SelectedTemplate data={cvData}/>
            </div>

            <div className="text-gray-500 text-sm pb-10">
                Vorschau im DIN A4 Format
            </div>
            <footer className="py-10 text-center">
                <p className="text-slate-400 text-xs tracking-widest uppercase"> Designed by Clint - Softwaredev
                    @{new Date().getFullYear()}</p>
                <p className="text-slate-400 text-xs tracking-widest uppercase"> All rights reserved</p>
            </footer>
        </div>
    );
}