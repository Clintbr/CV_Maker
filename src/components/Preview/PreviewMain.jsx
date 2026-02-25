import React from 'react';
import ModernTemplate from './Templates/ModernTemplate';
import ClassicTemplate from './Templates/ClassicTemplate';
import MinimalTemplate from './Templates/MinimalTemplate';

export default function PreviewMain({ cvData }) {

    // Mapping der IDs zu den Komponenten
    const templates = {
        t1: ModernTemplate,
        t2: ClassicTemplate,
        t3: MinimalTemplate,
    };

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
                <SelectedTemplate data={cvData} />
            </div>

            <div className="text-gray-500 text-sm pb-10">
                Vorschau im DIN A4 Format
            </div>
        </div>
    );
}