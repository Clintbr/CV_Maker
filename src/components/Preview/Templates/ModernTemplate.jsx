import React from 'react';
import Icon from '../../ui/Icon';

export default function FuturisticTemplate({ data }) {
    const { primaryColor } = data.settings;

    const glowStyle = {
        boxShadow: `0 0 20px ${primaryColor}30`,
        borderColor: primaryColor
    };

    return (
        /* Festgelegte Breite (800px) - Entspricht ca. einer digitalen A4-Vorschau */
        <div
            id="cv-preview"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black font-sans text-gray-200 relative overflow-hidden"
            style={{ width: '800px', minHeight: '1132px', margin: '0 auto', display: 'block' }}
        >
            {/* BACKGROUND ANIMATIONS */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 h-full">
                {/* HEADER SECTION */}
                <div
                    className="p-8 relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${primaryColor}20 0%, ${primaryColor}05 50%, transparent 100%)`,
                        borderBottom: `1px solid ${primaryColor}40`
                    }}
                >
                    <div className="flex justify-between items-start" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '580px' }}>
                            <h1 className="text-5xl font-black tracking-tighter mb-2 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    {data.personal.name || 'DEIN NAME'}
                                </span>
                            </h1>
                            <p className="text-xl font-light mb-4 text-gray-300 tracking-wide">
                                {data.personal.jobTitle || 'Professionelle Position'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {data.personal.email && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <Icon name="email" size={14} color={primaryColor}/>
                                        <span className="text-xs text-gray-300">{data.personal.email}</span>
                                    </div>
                                )}
                                {data.personal.phone && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <Icon name="phone" size={14} color={primaryColor}/>
                                        <span className="text-xs text-gray-300">{data.personal.phone}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {data.personal.profileImage && (
                            <div className="relative shrink-0">
                                <div className="absolute -inset-1 rounded-xl opacity-75 blur" style={{background: `linear-gradient(45deg, ${primaryColor}, transparent, ${primaryColor})`}}></div>
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/20 bg-gray-900">
                                    <img src={data.personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="p-8">
                    <div style={{ display: 'grid', gridTemplateColumns: '220px 480px', gap: '20px', alignItems: 'start' }}>

                        {/* SIDEBAR */}
                        <div className="space-y-4" style={{ width: '220px' }}>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10" style={glowStyle}>
                                <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{color: primaryColor}}>
                                    <Icon name="star" size={16}/>
                                    <span>SKILLS</span>
                                </h3>
                                <div className="space-y-3">
                                    {data.skills.map((skill) => (
                                        <div key={skill.id} className="space-y-1">
                                            <div className="flex justify-between text-xs mb-0.5 uppercase text-gray-400">
                                                <span>{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{background: primaryColor, width: `${skill.level}%`}}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10" style={glowStyle}>
                                <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{color: primaryColor}}>
                                    <Icon name="translate" size={16}/>
                                    <span>SPRACHEN</span>
                                </h3>
                                <div className="space-y-2">
                                    {data.languages.map((lang) => (
                                        <div key={lang.id} className="flex flex-col border-b border-white/5 pb-1.5 last:border-0">
                                            <span className="text-white font-bold text-xs uppercase">{lang.name}</span>
                                            <span className="text-xs" style={{color: `${primaryColor}CC`}}>{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MAIN BODY */}
                        <div className="space-y-6" style={{ width: '480px' }}>
                            {/* EXPERIENCE */}
                            <section className="space-y-3">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}20`}}>
                                        <Icon name="briefcase" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor}}>Berufserfahrung</h2>
                                </div>
                                <div className="space-y-4">
                                    {data.workExperience.map((job) => (
                                        <div key={job.id} className="relative p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{background: primaryColor}}></div>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-base font-bold text-white">{job.role}</h3>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300">{job.duration}</span>
                                            </div>
                                            <p className="text-sm mb-2 font-medium" style={{color: primaryColor}}>{job.company}</p>
                                            <p className="text-gray-400 text-xs whitespace-pre-line leading-relaxed">{job.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* PROJECTS (Hier sind sie wieder!) */}
                            <section className="space-y-3">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}20`}}>
                                        <Icon name="folder-star" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor}}>Projekte</h2>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    {data.projects.map((proj) => (
                                        <div key={proj.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h3 className="text-sm font-bold text-white mb-1 uppercase">{proj.title}</h3>
                                            <p className="text-xs text-gray-400 line-clamp-3">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* EDUCATION */}
                            <section className="space-y-3 pb-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}20`}}>
                                        <Icon name="school" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor}}>Bildung</h2>
                                </div>
                                <div className="space-y-2">
                                    {data.education.map((edu) => (
                                        <div key={edu.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                                            <div>
                                                <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                                                <p className="text-xs text-gray-400">{edu.school}</p>
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">{edu.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </div>
    );
}