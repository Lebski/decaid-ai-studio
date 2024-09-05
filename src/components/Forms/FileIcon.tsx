import React from 'react';

import aep from 'assets/images/file-icons/aep.svg';
import ai from 'assets/images/file-icons/ai.svg';
import csv from 'assets/images/file-icons/csv.svg';
import doc from 'assets/images/file-icons/doc.svg';
import docx from 'assets/images/file-icons/docx.svg';
import eps from 'assets/images/file-icons/eps.svg';
import fig from 'assets/images/file-icons/fig.svg';
import gif from 'assets/images/file-icons/gif.svg';
import img from 'assets/images/file-icons/img.svg';
import indd from 'assets/images/file-icons/indd.svg';
import jpg from 'assets/images/file-icons/jpg.svg';
import pdf from 'assets/images/file-icons/pdf.svg';
import png from 'assets/images/file-icons/png.svg';
import ppt from 'assets/images/file-icons/ppt.svg';
import pptx from 'assets/images/file-icons/pptx.svg';
import psd from 'assets/images/file-icons/psd.svg';
import svg from 'assets/images/file-icons/svg.svg';
import tiff from 'assets/images/file-icons/tiff.svg';
import txt from 'assets/images/file-icons/txt.svg';
import webp from 'assets/images/file-icons/webp.svg';
import xls from 'assets/images/file-icons/xls.svg';
import xlsx from 'assets/images/file-icons/xlsx.svg';

type FileIconProps = {
  fileType:
    | 'aep'
    | 'ai'
    | 'csv'
    | 'doc'
    | 'docx'
    | 'eps'
    | 'fig'
    | 'gif'
    | 'img'
    | 'indd'
    | 'jpg'
    | 'pdf'
    | 'png'
    | 'ppt'
    | 'pptx'
    | 'psd'
    | 'svg'
    | 'tiff'
    | 'txt'
    | 'webp'
    | 'xls'
    | 'xlsx';
  className?: string;
};

const FileIcon: React.FC<FileIconProps> = ({ fileType, className }) => {
  const icons = {
    aep,
    ai,
    csv,
    doc,
    docx,
    eps,
    fig,
    gif,
    img,
    indd,
    jpg,
    pdf,
    png,
    ppt,
    pptx,
    psd,
    svg,
    tiff,
    txt,
    webp,
    xls,
    xlsx
  };

  const baseClasses = 'object-contain shrink-0 w-10 aspect-square';

  return (
    <img
      src={icons[fileType]}
      alt={fileType}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default FileIcon;
