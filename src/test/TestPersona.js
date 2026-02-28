import {useState} from "react";

export const testCVData = {
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
};