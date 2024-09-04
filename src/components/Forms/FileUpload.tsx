import React, { useState, useRef, useCallback } from "react";
import UploadedFile from "./UploadedFile";
import uploadIcon from "assets/images/upload-cloud-02-gray.svg";
import IconBox from "components/Common/IconBox";

interface FileUploadProps {
    allowedFormats: string[];
    formatMessage?: string;
}

interface UploadingFile {
    file: File;
    progress: number;
    uploading: boolean;
    error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ allowedFormats, formatMessage }) => {
    const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const isFileFormatValid = useCallback((file: File) => {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        return fileExtension && allowedFormats.includes(fileExtension);
    }, [allowedFormats]);

    const handleFileSelection = useCallback((files: FileList) => {
        const newFiles = Array.from(files).map(file => ({
            file,
            progress: 0,
            uploading: true,
            error: isFileFormatValid(file) ? undefined : 'Unsupported file format'
        }));

        setUploadingFiles(prev => [...prev, ...newFiles]);

        // Simulate upload for each valid file
        newFiles.forEach(file => {
            if (!file.error) {
                simulateUpload(file);
            }
        });

        // Show error if any invalid files were selected
        const invalidFiles = newFiles.filter(file => file.error);
        if (invalidFiles.length > 0) {
            setError(`${invalidFiles.length} file(s) have unsupported format. Please upload only ${allowedFormats.join(', ')} files.`);
        } else {
            setError(null);
        }
    }, [isFileFormatValid, allowedFormats]);

    const simulateUpload = useCallback((uploadingFile: UploadingFile) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setUploadingFiles(prev => 
                    prev.map(f => 
                        f.file === uploadingFile.file ? { ...f, progress: 100, uploading: false } : f
                    )
                );
            } else {
                setUploadingFiles(prev => 
                    prev.map(f => 
                        f.file === uploadingFile.file ? { ...f, progress: Math.round(progress) } : f
                    )
                );
            }
        }, 500);
    }, []);

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
    }, []);

    const onDrop = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        handleFileSelection(event.dataTransfer.files);
    }, [handleFileSelection]);

    const onClickUpload = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const onFileInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            handleFileSelection(event.target.files);
        }
    }, [handleFileSelection]);

    return (
        <div className="flex flex-col flex-1 gap-4 shrink max-w-lg basis-0 min-w-[320px] max-md:max-w-full">
            <div 
                className="flex flex-col justify-center px-6 py-4 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full cursor-pointer"
                onClick={onClickUpload}
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
                <div className="flex flex-col w-full max-md:max-w-full justify-center">
                    <div className="flex justify-center">
                        <IconBox icon={uploadIcon} variant='md'/>
                    </div>
                    <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                        <p className="flex gap-1 justify-center items-start w-full text-sm leading-5 max-md:max-w-full">
                            <span className="overflow-hidden gap-1.5 self-stretch font-semibold text-violet-700">
                                Click to upload
                            </span>
                            <span className="text-slate-600">or drag and drop</span>
                        </p>
                        <p className="mt-1 text-xs leading-5 text-center text-slate-600 max-md:max-w-full">
                            {formatMessage || `Allowed formats: ${allowedFormats.join(', ')}`}
                        </p>
                    </div>
                </div>
            </div>
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={onFileInputChange}
                multiple
                accept={allowedFormats.map(format => `.${format}`).join(',')}
            />
            {uploadingFiles.map((file, index) => (
                <UploadedFile 
                    key={index}
                    fileName={file.file.name}
                    fileSize={`${(file.file.size / (1024 * 1024)).toFixed(1)} MB`}
                    fileType={file.file.name.split('.').pop() as any}
                    uploadProgress={file.progress}
                    uploadInProgress={file.uploading}
                    error={file.error}
                />
            ))}
        </div>
    );
};

export default FileUpload;