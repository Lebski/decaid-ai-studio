import React from 'react';
import FileIcon from './FileIcon';
import Spinner from './Spinner';

interface UploadedFileProps {
    fileName: string;
    fileSize: string;
    fileType: 'aep' | 'ai' | 'csv' | 'doc' | 'docx' | 'eps' | 'fig' | 'gif' | 'img' | 'indd' | 'jpg' | 'pdf' | 'png' | 'ppt' | 'pptx' | 'psd' | 'svg' | 'tiff' | 'txt' | 'webp' | 'xls' | 'xlsx';
    uploadProgress: number;
    uploadInProgress: boolean;
}

const UploadedFile: React.FC<UploadedFileProps> = ({ fileName, fileSize, fileType, uploadProgress, uploadInProgress }) => {
    return (
        <div className="w-full">
            <div className="flex items-center p-4 w-full bg-gray-50 rounded-xl border border-gray-200 border-solid">
                <div className="flex items-center flex-grow mr-3">
                    <FileIcon fileType={fileType} />
                    <div className="ml-3 min-w-0">
                        <p className="font-medium text-sm leading-5 text-ellipsis overflow-hidden whitespace-nowrap text-slate-700">{fileName}</p>
                        <p className="text-sm leading-5 text-ellipsis overflow-hidden whitespace-nowrap text-slate-600">
                            {fileSize}
                            {uploadInProgress && ` - ${uploadProgress}% uploaded`}
                        </p>
                    </div>
                </div>
                {uploadInProgress && (
                    <div className="flex-shrink-0 ml-12">
                        <Spinner className="w-8 h-8"/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadedFile;