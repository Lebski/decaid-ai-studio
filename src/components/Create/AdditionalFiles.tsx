import React from 'react';
import InputLabel from 'components/Forms/InputLabel';
import FileUpload from 'components/Forms/FileUpload';


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
            />
        </div>
    );
};

export default AdditionalFiles;