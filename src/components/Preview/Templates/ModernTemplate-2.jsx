import React from 'react';
import Icon from '../../ui/Icon';

export default function NeonTemplate({ data }) {
    const { primaryColor } = data.settings;

    const neonGlowStyle = {
        boxShadow: `0 0 15px ${primaryColor}40, 0 0 30px ${primaryColor}20`,
        borderColor: primaryColor
    };

    return (
        <div
            id="cv-preview"
            className="bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 font-sans text-slate-200 relative overflow-hidden"
            style={{ width: '800px', minHeight: '1132px', margin: '0 auto', display: 'block' }}
        >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 -left-4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-drift"></div>
                <div className="absolute bottom-10 -right-4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl animate-drift animation-delay-3000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 h-full">
                <div
                    className="p-8 relative overflow-hidden"
                    style={{
                        background: `linear-gradient(90deg, ${primaryColor}30 0%, ${primaryColor}10 50%, transparent 100%)`,
                        borderBottom: `2px solid ${primaryColor}60`
                    }}
                >
                    <div className="flex justify-between items-start" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '580px' }}>
                            <h1 className="text-5xl font-black tracking-tighter mb-2 relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400" style={{textShadow: `0 0 10px ${primaryColor}`}}>
                                    {data.personal.name || 'DEIN NAME'}
                                </span>
                            </h1>
                            <p className="text-xl font-light mb-4 text-slate-300 tracking-wide">
                                {data.personal.jobTitle || 'Professionelle Position'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {data.personal.email && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                                        <Icon name="email" size={14} color={primaryColor}/>
                                        <span className="text-xs text-slate-300">{data.personal.email}</span>
                                    </div>
                                )}
                                {data.personal.phone && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                                        <Icon name="phone" size={14} color={primaryColor}/>
                                        <span className="text-xs text-slate-300">{data.personal.phone}</span>
                                    </div>
                                )}
                                {data.personal.address && (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                                        <Icon name="location" size={14} color={primaryColor}/>
                                        <span className="text-xs text-slate-300">{data.personal.address} {data.personal.zipCode? ',': ''} {data.personal.zipCode}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {data.personal.profileImage && (
                            <div className="relative shrink-0">
                                <div className="absolute -inset-1 rounded-xl opacity-80 blur-md" style={{background: `linear-gradient(135deg, ${primaryColor}, #a855f7, ${primaryColor})`}}></div>
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-900">
                                    <img src={data.personal.profileImage} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-8">
                    <div style={{ display: 'grid', gridTemplateColumns: '220px 480px', gap: '20px', alignItems: 'start' }}>

                        <div className="space-y-4" style={{ width: '220px' }}>
                            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700" style={neonGlowStyle}>
                                <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{color: primaryColor}}>
                                    <Icon name="bolt" size={16}/>
                                    <span>SKILLS</span>
                                </h3>
                                <div className="space-y-3">
                                    {data.skills.map((skill) => (
                                        <div key={skill.id} className="space-y-1">
                                            <div
                                                className="flex justify-between text-xs mb-0.5 uppercase text-slate-400">
                                                <span>{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full" style={{
                                                    background: primaryColor,
                                                    width: `${skill.level}%`,
                                                    boxShadow: `0 0 8px ${primaryColor}`
                                                }}></div>
                                            </div>
                                            <span className="text-xs mb-0.5 uppercase text-gray-500">{skill.appreciation}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700" style={neonGlowStyle}>
                                <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{color: primaryColor}}>
                                    <Icon name="language" size={16}/>
                                    <span>SPRACHEN</span>
                                </h3>
                                <div className="space-y-2">
                                    {data.languages.map((lang) => (
                                        <div key={lang.id} className="flex flex-col border-b border-slate-700 pb-1.5 last:border-0">
                                            <span className="text-white font-bold text-xs uppercase">{lang.name}</span>
                                            <span className="text-xs" style={{color: `${primaryColor}CC`}}>{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6" style={{ width: '480px' }}>
                            <section className="space-y-3">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}30`, boxShadow: `0 0 10px ${primaryColor}`}}>
                                        <Icon name="work" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor, textShadow: `0 0 5px ${primaryColor}`}}>Berufserfahrung</h2>
                                </div>
                                <div className="space-y-4">
                                    {data.workExperience.map((job) => (
                                        <div key={job.id} className="relative p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{background: primaryColor, boxShadow: `0 0 10px ${primaryColor}`}}></div>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-base font-bold text-white">{job.role}</h3>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{job.duration}</span>
                                            </div>
                                            <p className="text-sm mb-2 font-medium" style={{color: primaryColor}}>{job.company}</p>
                                            <p className="text-slate-400 text-xs whitespace-pre-line leading-relaxed">{job.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-3">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}30`, boxShadow: `0 0 10px ${primaryColor}`}}>
                                        <Icon name="rocket" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor, textShadow: `0 0 5px ${primaryColor}`}}>Projekte</h2>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    {data.projects.map((proj) => (
                                        <div key={proj.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                                            <h3 className="text-sm font-bold text-white mb-1 uppercase">{proj.title}</h3>
                                            <p className="text-xs text-slate-400 line-clamp-3">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-3 pb-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg" style={{background: `${primaryColor}30`, boxShadow: `0 0 10px ${primaryColor}`}}>
                                        <Icon name="graduation" size={18} color={primaryColor}/>
                                    </div>
                                    <h2 className="text-lg font-bold uppercase tracking-wider" style={{color: primaryColor, textShadow: `0 0 5px ${primaryColor}`}}>Bildung</h2>
                                </div>
                                <div className="space-y-2">
                                    {data.education.map((edu) => (
                                        <div key={edu.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                                            <div>
                                                <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                                                <p className="text-xs text-slate-400">{edu.school}</p>
                                            </div>
                                            <span className="text-xs font-mono text-slate-500">{edu.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes drift {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                    25% { transform: translate(40px, -30px) scale(1.2); opacity: 0.5; }
                    50% { transform: translate(-30px, 40px) scale(0.9); opacity: 0.4; }
                    75% { transform: translate(20px, 20px) scale(1.1); opacity: 0.5; }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.1); }
                }
                .animate-drift { animation: drift 12s infinite; }
                .animate-pulse-slow { animation: pulse-slow 6s infinite; }
                .animation-delay-3000 { animation-delay: 3s; }
            `}</style>
        </div>
    );
}