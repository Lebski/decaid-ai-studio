import React from "react";
import UploadedFile from "./UploadedFile";

import uploadIcon from "assets/images/upload-cloud-02-gray.svg";
import IconBox from "components/Common/IconBox";

interface FileUploadProps {
    // Add props here
}

const FileUpload: React.FC<FileUploadProps> = () => {
    return (
        <div className="flex flex-col flex-1 gap-4 shrink max-w-lg basis-0 min-w-[320px] max-md:max-w-full">
            <div className="flex flex-col justify-center px-6 py-4 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
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
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                    </div>
                </div>
            </div>
            <UploadedFile fileName="Logo.svg" fileSize="0.2 MB" fileType="svg" uploadProgress={50} uploadInProgress={true} />
            <UploadedFile fileName="meeting-summary.pdf" fileSize="23.2 MB" fileType="pdf" uploadProgress={50} uploadInProgress={false} />
        </div>
    );
};

export default FileUpload;