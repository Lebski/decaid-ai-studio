import React from 'react';
import FileIcon from './FileIcon';
import Spinner from './Spinner';
import DeleteButton from './DeleteButton';

interface UploadedFileProps {
    fileName: string;
    fileSize: string;
    fileType: string;
    uploadProgress: number;
    uploadInProgress: boolean;
    error?: string;
    onDelete: () => void;
}

const validFileTypes = ['aep', 'ai', 'csv', 'doc', 'docx', 'eps', 'fig', 'gif', 'img', 'indd', 'jpg', 'pdf', 'png', 'ppt', 'pptx', 'psd', 'svg', 'tiff', 'txt', 'webp', 'xls', 'xlsx'];

const UploadedFile: React.FC<UploadedFileProps> = ({ 
    fileName, 
    fileSize, 
    fileType, 
    uploadProgress, 
    uploadInProgress, 
    error,
    onDelete
}) => {
    const isValidFileType = validFileTypes.includes(fileType.toLowerCase());

    const defaultBorder = 'border border-gray-200 border-solid';
    const errorBorder = 'border border-2 border-red-500 border-solid';
    const borderClasses = error ? errorBorder : defaultBorder;

    return (
        <div className="w-full relative">
            <div className={`flex items-center p-4 w-full bg-gray-50 rounded-xl ${borderClasses}`}>
                <div className="flex items-center flex-grow min-w-0">
                    {isValidFileType && (
                        <div className="flex-shrink-0 mr-3">
                            <FileIcon fileType={fileType as any} />
                        </div>
                    )}
                    <div className="min-w-0 flex-grow">
                        <p className="font-medium text-sm leading-5 truncate text-slate-700" title={fileName}>
                            {fileName}
                        </p>
                        <p className="text-sm leading-5 truncate text-slate-600">
                            {fileSize}
                            {uploadInProgress && !error && ` - ${uploadProgress}% uploaded`}
                            {error && <span className="text-red-500"> - {error}</span>}
                        </p>
                    </div>
                </div>
                {uploadInProgress && !error && (
                    <div className="flex-shrink-0 ml-4">
                        <Spinner className="w-8 h-8"/>
                    </div>
                )}
            </div>
            {!uploadInProgress && (
                <div className="absolute top-2 right-2">
                    <DeleteButton
                        iconColor={error ? 'red' : 'black'}
                        onClick={onDelete}
                    />
                </div>
            )}
        </div>
    );
};

export default UploadedFile;