import React from 'react';
import InputLabel from 'components/Forms/InputLabel';
import FileUpload from 'components/Forms/FileUpload';

const handleFileUploaded = (file: File) => {
    console.log(`File uploaded: ${file.name}`);
    // Perform any additional actions with the uploaded file
};

interface AdditionalFilesProps {
    // Add any props if needed
}

const AdditionalFiles: React.FC<AdditionalFilesProps> = () => {
    return (
        <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
            <InputLabel
                label='Additional files'
                description='Upload additional knowledge'
            />
            <FileUpload 
                allowedFormats={['svg', 'png', 'jpeg', 'jpg', 'gif']}
                formatMessage="SVG, PNG, JPG or GIF (max. 800x400px)"
                onFileUploaded={handleFileUploaded}
            />
        </div>
    );
};

export default AdditionalFiles;