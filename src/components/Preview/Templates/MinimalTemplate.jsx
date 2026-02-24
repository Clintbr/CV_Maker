export default function MinimalTemplate({ data }) {
    return (
        <div className="p-10 max-w-3xl mx-auto">
            {/* Minimaler Header */}
            <div className="mb-12">
                <h1 className="text-5xl font-light uppercase tracking-[0.2em]"
                    style={{ color: data.settings.primaryColor }}>
                    {data.personal.name || 'DEIN NAME'}
                </h1>
                <p className="text-sm text-gray-400 mt-2">BERUFSERFAHRUNG</p>
            </div>

            {/* Minimalistische Liste */}
            <div className="space-y-8">
                {data.workExperience.map((job, index) => (
                    <div key={job.id} className="grid grid-cols-4 gap-4">
                        {/* Jahr links */}
                        <div className="col-span-1">
              <span className="text-sm font-light text-gray-400">
                {job.duration}
              </span>
                        </div>

                        {/* Inhalt rechts */}
                        <div className="col-span-3">
                            <h3 className="text-lg font-medium">{job.role}</h3>
                            <p className="text-gray-600 text-sm mt-1">{job.company}</p>
                            {job.description && (
                                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                                    {job.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}