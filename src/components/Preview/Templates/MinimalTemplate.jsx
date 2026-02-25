import React from 'react';
import Icon from '../../ui/Icon';

export default function ModernMinimalTemplate({ data }) {
    const { primaryColor } = data.settings;

    return (
        <div className="bg-white w-full h-full font-sans text-gray-800 relative">
            {/* Minimaler Header mit großzügigem Weißraum */}
            <div className="max-w-3xl mx-auto px-8 pt-16 pb-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                        <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-3">
                            {data.personal.name || 'Max Mustermann'}
                        </h1>
                        <p className="text-xl font-light text-gray-500 mb-6">
                            {data.personal.jobTitle || 'Softwareentwickler'}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm">
                            {data.personal.email && (
                                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
                                    <Icon name="email" size={18} color={primaryColor} />
                                    <span>{data.personal.email}</span>
                                </div>
                            )}
                            {data.personal.phone && (
                                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
                                    <Icon name="phone" size={18} color={primaryColor} />
                                    <span>{data.personal.phone}</span>
                                </div>
                            )}
                            {(data.personal.address || data.personal.zipCode) && (
                                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
                                    <Icon name="map-marker" size={18} color={primaryColor} />
                                    <span>{data.personal.zipCode} {data.personal.address}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {data.personal.profileImage && (
                        <div className="shrink-0">
                            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100">
                                <img
                                    src={data.personal.profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Hauptinhalt mit klarer Typografie */}
            <div className="max-w-3xl mx-auto px-8 pb-16">
                {/* Über mich / Profil (optional) */}
                {data.personal.summary && (
                    <div className="mb-12">
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            {data.personal.summary}
                        </p>
                    </div>
                )}

                {/* Berufserfahrung */}
                {data.workExperience && data.workExperience.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
                            Berufserfahrung
                        </h2>
                        <div className="space-y-8">
                            {data.workExperience.map((job) => (
                                <div key={job.id} className="group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {job.position || job.role}
                                        </h3>
                                        <span className="text-sm text-gray-400 font-light">
                                            {job.startDate} — {job.endDate || 'heute'}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-500 mb-3">
                                        {job.company}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        {job.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Projekte */}
                {data.projects && data.projects.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
                            Ausgewählte Projekte
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {data.projects.map((proj) => (
                                <div key={proj.id} className="group">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        {proj.name || proj.title}
                                    </h3>
                                    {proj.link && (
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-400 hover:text-gray-900 transition-colors inline-block mb-2 font-light"
                                            style={{ color: primaryColor }}
                                        >
                                            {proj.link.replace('https://', '')}
                                        </a>
                                    )}
                                    <p className="text-gray-600 text-sm leading-relaxed font-light mb-2">
                                        {proj.description}
                                    </p>
                                    {proj.technologies && (
                                        <div className="flex flex-wrap gap-2">
                                            {proj.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs text-gray-400 bg-gray-50 px-2 py-1"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Grid für Skills und Bildung */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <div>
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
                                Skills
                            </h2>
                            <div className="space-y-4">
                                {data.skills.map((skill) => (
                                    <div key={skill.id}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-700">{skill.name}</span>
                                            <span className="text-gray-400 font-light">{skill.level}%</span>
                                        </div>
                                        <div className="h-px bg-gray-100 w-full">
                                            <div
                                                className="h-px transition-all duration-300"
                                                style={{
                                                    backgroundColor: primaryColor,
                                                    width: `${skill.level}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Bildung */}
                    {data.education && data.education.length > 0 && (
                        <div>
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
                                Bildung
                            </h2>
                            <div className="space-y-6">
                                {data.education.map((edu) => (
                                    <div key={edu.id}>
                                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs text-gray-400 font-light">
                                            {edu.startDate} — {edu.endDate || 'heute'}
                                        </p>
                                        {edu.description && (
                                            <p className="text-sm text-gray-600 font-light mt-2">
                                                {edu.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sprachen */}
                {data.languages && data.languages.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
                            Sprachen
                        </h2>
                        <div className="flex flex-wrap gap-6">
                            {data.languages.map((lang) => (
                                <div key={lang.id} className="flex items-center gap-3">
                                    <span className="text-sm text-gray-900">{lang.name}</span>
                                    <span className="text-xs text-gray-400 font-light">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}