export default function ModernTemplate({ data }) {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-black uppercase" style={{ color: data.settings.primaryColor }}>
                {data.personal.name || 'DEIN NAME'}
            </h1>
            <div className="mt-8 border-l-4 pl-4" style={{ borderColor: data.settings.primaryColor }}>
                <h2 className="text-xl font-bold">Berufserfahrung</h2>
                {data.workExperience.map(job => (
                    <div key={job.id} className="mt-4">
                        <h3 className="font-bold">{job.role} bei {job.company}</h3>
                        <p className="text-gray-600 italic text-sm">{job.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}