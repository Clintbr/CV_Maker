import React, { useState } from 'react';
import EditorMain from './components/Editor/EditorMain';
import PreviewMain from './components/Preview/PreviewMain';

function App() {
    const [cvData, setCvData] = useState({
        personal: { name: '', email: '', phone: '', address: '' },
        workExperience: [
            { id: Date.now(), company: '', role: '', duration: '', description: '' }
        ],
        projects: [{ id: 1, title: '', duration: '', description: '' }],
        education: [{ id: 1, school: '', degree: '', year: '' }],
        settings: {
            primaryColor: '#3b82f6',
            templateId: 't1',
        }
    });

    return (
        <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
            {/* Linke Seite: Editor */}
            <section className="w-1/2 h-full overflow-y-auto bg-white shadow-xl z-10">
                <EditorMain cvData={cvData} setCvData={setCvData} />
            </section>

            {/* Rechte Seite: Preview */}
            <section className="w-1/2 h-full overflow-y-auto bg-gray-300 p-12 flex justify-center">
                <PreviewMain cvData={cvData} />
            </section>
        </div>
    );
}

export default App;