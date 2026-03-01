import React from 'react';
import Icon from '../../ui/Icon';

export default function MinimalistTemplate({ data }) {
    const { primaryColor } = data.settings;

    return (
        <div
            id="cv-preview"
            className="bg-white font-sans text-gray-700"
            style={{ width: '800px', minHeight: '1132px', margin: '0 auto', display: 'block' }}
        >
            <div className="h-full">
                <div className="px-8 pt-8 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
                                {data.personal.name || 'DEIN NAME'}
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                {data.personal.jobTitle || 'Berufsbezeichnung'}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm">
                                {data.personal.email && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="email" size={14} color={primaryColor}/>
                                        <span>{data.personal.email}</span>
                                    </div>
                                )}
                                {data.personal.phone && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="phone" size={14} color={primaryColor}/>
                                        <span>{data.personal.phone}</span>
                                    </div>
                                )}
                                {data.personal.address && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Icon name="location" size={14} color={primaryColor}/>
                                        <span>{data.personal.address}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {data.personal.profileImage && (
                            <div className="ml-6 w-20 h-20 rounded-full overflow-hidden border border-gray-200">
                                <img
                                    src={data.personal.profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex gap-8">
                        <div className="w-1/3 space-y-6">
                            {data.skills?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Skills
                                    </h3>
                                    <div className="space-y-3">
                                        {data.skills.map((skill) => (
                                            <div key={skill.id}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-700">{skill.name}</span>
                                                    <span className="text-gray-400">{skill.level}%</span>
                                                </div>
                                                <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
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
                            )}

                            {data.languages?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Sprachen
                                    </h3>
                                    <div className="space-y-2">
                                        {data.languages.map((lang) => (
                                            <div key={lang.id} className="flex justify-between text-sm">
                                                <span className="text-gray-700">{lang.name}</span>
                                                <span className="text-gray-500">{lang.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-2/3 space-y-6">
                            {data.workExperience?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Berufserfahrung
                                    </h3>
                                    <div className="space-y-4">
                                        {data.workExperience.map((job) => (
                                            <div key={job.id}>
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <h4 className="font-medium text-gray-900">{job.role}</h4>
                                                    <span className="text-sm text-gray-500">{job.duration}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                                                <p className="text-sm text-gray-500 leading-relaxed">{job.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {data.projects?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Projekte
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {data.projects.map((proj) => (
                                            <div key={proj.id}>
                                                <h4 className="font-medium text-gray-900 text-sm mb-1">{proj.title}</h4>
                                                <p className="text-sm text-gray-500">{proj.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {data.education?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Bildung
                                    </h3>
                                    <div className="space-y-3">
                                        {data.education.map((edu) => (
                                            <div key={edu.id} className="flex justify-between items-baseline">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-sm">{edu.degree}</h4>
                                                    <p className="text-sm text-gray-500">{edu.school}</p>
                                                </div>
                                                <span className="text-sm text-gray-400">{edu.year}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}