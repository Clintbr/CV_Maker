import React, {useState, useEffect, useCallback, useRef} from 'react';
import EditorMain from './components/Editor/EditorMain';
import PreviewMain from './components/Preview/PreviewMain';
import html2pdf from 'html2pdf.js';
import Icon from './components/ui/Icon';
import {useReactToPrint} from "react-to-print";

function App() {
    const contentRef = useRef(null);
    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: 'Lebenslauf',
    });
    const [editorWidth, setEditorWidth] = useState(600);
    const [isResizing, setIsResizing] = useState(false);

    /*const [cvData, setCvData] = useState({
        personal: { name: '', email: '', phone: '', jobTitle: '', address: '', zipCode: '', profileImage: null },
        workExperience: [],
        education: [],
        projects: [],
        skills: [
            { id: 1, name: 'React', level: 40 },
            { id: 2, name: 'Tailwind CSS', level: 85 }
        ],
        settings: {
            primaryColor: '#7c3aed',
            templateId: 't1',
        }
    }); */

    const [cvData, setCvData] = useState({
        personal: {
            name: 'Dr. Elias Weber',
            email: 'e.weber@informatik.dev',
            phone: '+49 176 12345678',
            jobTitle: 'Senior Full-Stack Developer & AI-Spezialist',
            address: 'Musterstraße 42',
            zipCode: '10115 Berlin',
            profileImage: null // oder ein Platzhalter wie '/api/placeholder/150/150'
        },
        workExperience: [
            {
                id: 1,
                company: 'TechVision GmbH',
                position: 'Full-Stack Entwickler',
                startDate: '2021-03',
                endDate: '2024-02',
                description: 'Entwicklung einer Cloud-basierten CRM-Plattform mit React und Node.js. Implementierung von Microservices mit Docker und Kubernetes.'
            },
            {
                id: 2,
                company: 'Digital Solutions AG',
                position: 'Frontend Entwickler',
                startDate: '2018-07',
                endDate: '2021-02',
                description: 'Aufbau einer component-basierten Design-System-Bibliothek mit Vue.js und TypeScript. Enge Zusammenarbeit mit UX-Designern.'
            },
            {
                id: 3,
                company: 'StartUp Labs',
                position: 'Werkstudent Softwareentwicklung',
                startDate: '2016-10',
                endDate: '2018-06',
                description: 'Mitarbeit an der Entwicklung einer mobilen Fitness-App (React Native).'
            }
        ],
        education: [
            {
                id: 1,
                institution: 'Technische Universität München',
                degree: 'Master of Science (M.Sc.) Informatik',
                startDate: '2016-10',
                endDate: '2019-04',
                description: 'Schwerpunkt: Künstliche Intelligenz und Maschinelles Lernen. Masterarbeit: "Optimierung von Transformer-Modellen für Edge Computing".'
            },
            {
                id: 2,
                institution: 'RWTH Aachen',
                degree: 'Bachelor of Science (B.Sc.) Informatik',
                startDate: '2013-10',
                endDate: '2016-08',
                description: 'Grundlagen der Softwareentwicklung, Algorithmen und Datenbanken.'
            }
        ],
        projects: [
            {
                id: 1,
                name: 'KI-Code-Assistent',
                description: 'Entwicklung eines VS-Code Plugins, das Entwicklern mittels GPT-API Code-Vorschläge generiert.',
                technologies: ['TypeScript', 'OpenAI API', 'LangChain'],
                link: 'github.com/elias/ai-code-assistant'
            },
            {
                id: 2,
                name: 'Smart Home Dashboard',
                description: 'IoT-Dashboard zur Steuerung von smarten Geräten mit Echtzeit-Updates via WebSockets.',
                technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MQTT'],
                link: 'smart-home-demo.vercel.app'
            },
            {
                id: 3,
                name: 'Datenbank-Optimierungstool',
                description: 'Open-Source Tool zur Analyse und Optimierung von MongoDB-Abfragen.',
                technologies: ['Python', 'MongoDB', 'Pandas'],
                link: 'github.com/elias/db-optimizer'
            }
        ],
        skills: [
            { id: 1, name: 'React / Next.js', level: 95 },
            { id: 2, name: 'TypeScript', level: 90 },
            { id: 3, name: 'Node.js', level: 85 },
            { id: 4, name: 'Python', level: 80 },
            { id: 5, name: 'Docker / Kubernetes', level: 75 },
            { id: 6, name: 'SQL / NoSQL', level: 85 },
            { id: 7, name: 'GraphQL', level: 70 },
            { id: 8, name: 'Tailwind CSS', level: 90 }
        ],
        languages: [
            { id: 1, name: 'Deutsch', level: 'Muttersprache' },
            { id: 2, name: 'Englisch', level: 'Verhandlungssicher (C2)' }
        ],
        settings: {
            primaryColor: '#2563eb',
            templateId: 't1',
        }
    });



    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((e) => {
        if (isResizing) {
            const newWidth = e.clientX;
            if (newWidth > 320 && newWidth < 900) {
                setEditorWidth(newWidth);
            }
        }
    }, [isResizing]);

    useEffect(() => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResizing);
        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [resize, stopResizing]);

    const downloadPDF = async () => {
        const element = document.getElementById('cv-preview');

        // Entferne kurzzeitig die Animationen für den Export,
        // da diese den Renderer oft zum Absturz bringen
        element.classList.add('pdf-export-mode');

        const opt = {
            margin: 0,
            filename: `${cvData.personal.name || 'Lebenslauf'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 1,
                useCORS: true,
                logging: false,
                letterRendering: true,
                allowTaint: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("PDF Export fehlgeschlagen:", error);
        } finally {
            element.classList.remove('pdf-export-mode');
        }
    };

    return (
        <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
            <section style={{ width: `${editorWidth}px` }} className="h-full overflow-y-auto bg-white border-r">
                <EditorMain cvData={cvData} setCvData={setCvData} />
            </section>

            <section className="flex-1 h-full overflow-y-auto bg-gray-200 p-8 flex flex-col items-center relative">

                <button
                    onClick={handlePrint}
                    className="fixed bottom-8 right-8 flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold"
                >
                    <Icon name="printer" size={20} color="white" />
                    <span>PDF / Drucken</span>
                </button>

                <div className="w-full flex justify-center">
                    <div ref={contentRef} className="shadow-2xl">
                        <PreviewMain cvData={cvData} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;