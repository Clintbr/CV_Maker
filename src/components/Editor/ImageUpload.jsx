export default function ImageUpload({ cvData, setCvData }) {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCvData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, profileImage: reader.result }
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setCvData(prev => ({
            ...prev,
            personal: { ...prev.personal, profileImage: null }
        }));
    };

    return (
        <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Profilbild</label>
            <div className="flex items-center gap-4">
                {cvData.personal.profileImage ? (
                    <div className="relative">
                        <img
                            src={cvData.personal.profileImage}
                            className="w-20 h-20 rounded-full object-cover border-2"
                            style={{ borderColor: cvData.settings.primaryColor }}
                        />
                        <button
                            onClick={removeImage}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                        >
                            ✕
                        </button>
                    </div>
                ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed flex items-center justify-center text-gray-400">
                        <span>Foto</span>
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>
        </div>
    );
}