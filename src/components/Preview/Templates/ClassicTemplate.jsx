export default function ClassicTemplate({ data }) {
    return (
        <div className="p-10 max-w-4xl mx-auto bg-white shadow-lg">
            {/* Header mit Linien */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-wide" style={{ color: data.settings.primaryColor }}>
                    {data.personal.name || 'DEIN NAME'}
                </h1>
                <div className="w-24 h-1 mx-auto mt-2" style={{ backgroundColor: data.settings.primaryColor }} />
            </div>

            {/* Erfahrung im klassischen Stil */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold uppercase tracking-wider mb-4"
                    style={{ color: data.settings.primaryColor }}>
                    Berufserfahrung
                </h2>
                {data.workExperience.map(job => (
                    <div key={job.id} className="mb-6 pb-4 border-b border-gray-200 last:border-0">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-lg font-bold">{job.role}</h3>
                            <span className="text-sm text-gray-500 italic">{job.duration}</span>
                        </div>
                        <p className="text-md text-gray-700 mt-1">{job.company}</p>
                        {job.description && (
                            <p className="text-gray-600 mt-2 text-sm">{job.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}