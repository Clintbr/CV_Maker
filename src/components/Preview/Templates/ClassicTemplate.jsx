import React from 'react';
import Icon from '../../ui/Icon';

export default function ClassicTemplate({ data }) {
    const { primaryColor } = data.settings;

    return (
        <div className="bg-white w-full h-full font-sans text-gray-700 relative overflow-hidden">
            {/* Einfache, elegante Linie als Dekoration */}
            <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: primaryColor }}
            ></div>

            <div className="relative z-10 h-full overflow-y-auto">
                {/* Header mit klarer Struktur */}
                <div className="pl-8 pr-12 py-8 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {data.personal.name || 'Max Mustermann'}
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                {data.personal.jobTitle || 'Softwareentwickler'}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm">
                                {data.personal.email && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="email" size={16} color={primaryColor} />
                                        <span>{data.personal.email}</span>
                                    </div>
                                )}
                                {data.personal.phone && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="phone" size={16} color={primaryColor} />
                                        <span>{data.personal.phone}</span>
                                    </div>
                                )}
                                {(data.personal.address || data.personal.zipCode) && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="map-marker" size={16} color={primaryColor} />
                                        <span>
                                            {data.personal.address}{data.personal.address && data.personal.zipCode ? ', ' : ''}{data.personal.zipCode}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {data.personal.profileImage && (
                            <div className="shrink-0">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
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

                {/* Hauptinhalt mit zwei Spalten */}
                <div className="pl-8 pr-12 py-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Linke Spalte */}
                        <div className="space-y-6">
                            {/* Skills */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                    <Icon name="star" size={16} color={primaryColor} />
                                    <span>Kenntnisse</span>
                                </h3>
                                <div className="space-y-3">
                                    {data.skills.map((skill) => (
                                        <div key={skill.id}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium text-gray-700">{skill.name}</span>
                                                <span className="text-gray-500">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
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

                            {/* Sprachen */}
                            {data.languages && data.languages.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                        <Icon name="translate" size={16} color={primaryColor} />
                                        <span>Sprachen</span>
                                    </h3>
                                    <div className="space-y-2">
                                        {data.languages.map((lang) => (
                                            <div key={lang.id} className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                                                <span className="text-xs text-gray-500">{lang.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bildung */}
                            {data.education && data.education.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                        <Icon name="school" size={16} color={primaryColor} />
                                        <span>Bildung</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {data.education.map((edu) => (
                                            <div key={edu.id}>
                                                <p className="font-bold text-gray-800 text-sm">{edu.degree}</p>
                                                <p className="text-xs text-gray-600 mb-1">{edu.institution}</p>
                                                <p className="text-xs text-gray-500">
                                                    {edu.startDate} - {edu.endDate || 'heute'}
                                                </p>
                                                {edu.description && (
                                                    <p className="text-xs text-gray-600 mt-1">{edu.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Rechte Spalte */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Berufserfahrung */}
                            {data.workExperience && data.workExperience.length > 0 && (
                                <section>
                                    <h2 className="text-base font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                                        <Icon name="briefcase" size={18} color={primaryColor} />
                                        <span>Berufserfahrung</span>
                                    </h2>
                                    <div className="space-y-6">
                                        {data.workExperience.map((job) => (
                                            <div key={job.id} className="space-y-1">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                                                    <h3 className="font-bold text-gray-800">{job.position || job.role}</h3>
                                                    <span className="text-xs text-gray-500">
                                                        {job.startDate} - {job.endDate || 'heute'}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 font-medium">{job.company}</p>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {job.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Projekte */}
                            {data.projects && data.projects.length > 0 && (
                                <section>
                                    <h2 className="text-base font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                                        <Icon name="folder-star" size={18} color={primaryColor} />
                                        <span>Projekte</span>
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {data.projects.map((proj) => (
                                            <div key={proj.id} className="space-y-1">
                                                <h3 className="font-bold text-gray-800">{proj.name || proj.title}</h3>
                                                {proj.link && (
                                                    <a
                                                        href={proj.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs text-gray-500 hover:underline block"
                                                        style={{ color: primaryColor }}
                                                    >
                                                        {proj.link}
                                                    </a>
                                                )}
                                                <p className="text-sm text-gray-600">{proj.description}</p>
                                                {proj.technologies && (
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        <span className="font-medium">Technologien:</span> {proj.technologies.join(', ')}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}