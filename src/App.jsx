import React, {useState, useEffect, useCallback, useRef} from 'react';
import EditorMain from './components/Editor/EditorMain';
import PreviewMain from './components/Preview/PreviewMain';
import html2pdf from 'html2pdf.js';
import Icon from './components/ui/Icon';
import {useReactToPrint} from "react-to-print";
import {testCVData} from './test/TestPersona.js'

function App() {
    const contentRef = useRef(null);
    const [editorWidth, setEditorWidth] = useState(600);
    const [lastWidth, setLastWidth] = useState(600);
    const [isResizing, setIsResizing] = useState(false);

    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: 'Lebenslauf',
    });

    /**
     * Persona: The informations needed in the form
     * test with a persona: the test State just help testing Cv related functionalities
     * It doesn't help testing aoder apps functions
     * const [cvData, setCvData] = useState(testCVData)
     * Primary settings are already set in the form
      */

    const [cvData, setCvData] = useState({
        personal: { name: '', email: '', phone: '', jobTitle: '', address: '', zipCode: '', profileImage: null },
        workExperience: [],
        education: [],
        projects: [],
        skills: [],
        languages: [],
        settings: {
            primaryColor: '#7c3aed',
            templateId: 't1',
        }
    });

    const toggleEditor = () => {
        if (editorWidth > 0) {
            setLastWidth(editorWidth);
            setEditorWidth(0);
        } else {
            setEditorWidth(lastWidth > 100 ? lastWidth : 450);
        }
    };

    const startResizing = useCallback((e) => {
        e.preventDefault();
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((e) => {
        if (isResizing) {
            const maxWidth = window.innerWidth * 0.4; // Genau 2/5 der Bildschirmbreite
            const newWidth = e.clientX;

            if (newWidth < 100) {
                setEditorWidth(0); // Snappt auf 0 zum Ausblenden
            } else if (newWidth <= maxWidth) {
                setEditorWidth(newWidth);
            }
        }
    }, [isResizing]);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', stopResizing);
        }
        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [isResizing, resize, stopResizing]);

    /**
     * print de previewed CV with the native function of React using the Browser Print function
     * It is not optimised: It will be replaced in next versions
     * @returns {Promise<void>}
     */
    const downloadPDF = async () => {
        const element = document.getElementById('cv-preview');
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
        <div className="flex h-screen w-full bg-gray-100 overflow-hidden relative">

            <section
                className="h-full bg-white border-r relative z-20 flex flex-col"
                style={{
                    width: `${editorWidth}px`,
                    minWidth: editorWidth > 0 ? '300px' : '0px',
                    transition: isResizing ? 'none' : 'width 0.3s ease'
                }}
            >
                <div className={`flex-1 overflow-y-auto ${editorWidth === 0 ? 'hidden' : 'block'}`}>
                    <EditorMain cvData={cvData} setCvData={setCvData}/>
                </div>
                <div
                    onMouseDown={startResizing}
                    className="absolute top-0 -right-1 w-2 h-full cursor-col-resize z-50 group"
                >
                    <div className="w-full h-full bg-transparent group-hover:bg-blue-500/30 transition-colors" />

                    <button
                        onClick={toggleEditor}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-10 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-[60]"
                    >
                        <Icon name={editorWidth === 0 ? "chevron-right" : "chevron-left"} size={14} color="#666" />
                    </button>
                </div>
            </section>

            <section className="flex-1 h-full overflow-y-auto bg-gray-300 p-8 flex flex-col items-center relative z-10">
                <button
                    onClick={handlePrint}
                    className="fixed bottom-8 right-8 flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold"
                >
                    <Icon name="printer" size={20} color="white"/>
                    <span>PDF / Drucken</span>
                </button>

                <div className="w-full flex justify-center">
                    <div ref={contentRef} className="shadow-2xl bg-white">
                        <PreviewMain cvData={cvData}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;