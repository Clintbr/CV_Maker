import React, { useState, useEffect, useCallback, useRef } from 'react';
import EditorMain from './components/Editor/EditorMain';
import PreviewMain from './components/Preview/PreviewMain';
import Icon from './components/ui/Icon';
import { useReactToPrint } from "react-to-print";
import { testCVData } from './test/TestPersona.js';

function App() {
    const contentRef = useRef(null);

    const [editorWidth, setEditorWidth] = useState(600);
    const [lastWidth, setLastWidth] = useState(600);
    const [isResizing, setIsResizing] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [activeTab, setActiveTab] = useState('editor');

    const [cvData, setCvData] = useState({
        personal: { name: '', email: '', phone: '', jobTitle: '', address: '', zipCode: '', profileImage: null },
        workExperience: [],
        education: [],
        projects: [],
        skills: [],
        languages: [],
        settings: { primaryColor: '#7c3aed', templateId: 't1' }
    });

    // --- Effects ---
    useEffect(() => {
        const handleResizeWindow = () => {
            const mobile = window.innerWidth < 900;
            setIsMobile(mobile);
            if (!mobile && editorWidth === 0 && lastWidth === 0) {
                setEditorWidth(600); // Reset falls aus Mobile-Mode zurückgekehrt wird
            }
        };
        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, [editorWidth, lastWidth]);

    // --- Resize & Print Logik ---
    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: 'Lebenslauf',
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
        if (isMobile) return;
        e.preventDefault();
        setIsResizing(true);
    }, [isMobile]);

    const stopResizing = useCallback(() => setIsResizing(false), []);

    const resize = useCallback((e) => {
        if (isResizing && !isMobile) {
            const maxWidth = window.innerWidth * 0.4;
            const newWidth = e.clientX;
            if (newWidth < 100) setEditorWidth(0);
            else if (newWidth <= maxWidth) setEditorWidth(newWidth);
        }
    }, [isResizing, isMobile]);

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

    return (
        <div className="flex flex-col h-screen w-full bg-gray-100 overflow-hidden relative">

            {/* MOBILE NAVIGATION TABS (Nur sichtbar < 900px) */}
            {isMobile && (
                <div className="flex bg-white border-b z-[70]">
                    <button
                        onClick={() => setActiveTab('editor')}
                        className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 ${activeTab === 'editor' ? 'text-violet-600 border-b-2 border-violet-600 bg-violet-50' : 'text-gray-500'}`}
                    >
                        <Icon name="pencil" size={16} /> Editor
                    </button>
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 ${activeTab === 'preview' ? 'text-violet-600 border-b-2 border-violet-600 bg-violet-50' : 'text-gray-500'}`}
                    >
                        <Icon name="eye" size={16} /> Vorschau
                    </button>
                </div>
            )}

            <div className="flex flex-1 h-full overflow-hidden relative">

                {/* EDITOR SEKTION */}
                <section
                    className={`h-full bg-white border-r relative z-20 flex flex-col transition-all duration-300
                        ${isMobile ? (activeTab === 'editor' ? 'w-full' : 'hidden') : ''}`}
                    style={!isMobile ? { width: `${editorWidth}px`, minWidth: editorWidth > 0 ? '300px' : '0px' } : {}}
                >
                    <div className={`flex-1 overflow-y-auto ${!isMobile && editorWidth === 0 ? 'hidden' : 'block'}`}>
                        <EditorMain cvData={cvData} setCvData={setCvData}/>
                    </div>

                    {/* Resize Handle (Nur auf Desktop sichtbar) */}
                    {!isMobile && (
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
                    )}
                </section>

                {/* VORSCHAU SEKTION */}
                <section className={`flex-1 h-full overflow-y-auto bg-gray-300 p-4 md:p-8 flex flex-col items-center relative z-10 
                    ${isMobile && activeTab !== 'preview' ? 'hidden' : ''}`}>

                    <button
                        onClick={handlePrint}
                        className="fixed bottom-8 right-8 flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold active:scale-95 transition-transform"
                    >
                        <Icon name="printer" size={20} color="white"/>
                        <span className={isMobile ? "hidden" : "block"}>PDF / Drucken</span>
                    </button>

                    <div className={`w-full justify-center ${isMobile ? '' : ''}`}>
                        <div ref={contentRef} className="shadow-2xl bg-white">
                            <PreviewMain cvData={cvData}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;