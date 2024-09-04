import React, { useState, useCallback, useRef, useEffect } from "react";

interface TextFieldProps {
  name: string;
  ariaLabel: string;
  placeholder?: string;
  maxChars?: number;
  onChange?: (text: string) => void;
  fixedHeight?: boolean;
  maxHeight?: string;
}

const TextField: React.FC<TextFieldProps> = ({ 
  name, 
  ariaLabel, 
  placeholder, 
  maxChars = 275, 
  onChange,
  fixedHeight = false,
  maxHeight = '400px'
}) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (fixedHeight) {
      textarea.style.height = '180px';
    } else {
      textarea.style.height = '24px';
      const scrollHeight = Math.min(textarea.scrollHeight, 180);
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [fixedHeight]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange?.(newText);
    if (!fixedHeight) {
      adjustHeight();
    }
  }, [onChange, adjustHeight, fixedHeight]);

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight]);

  const charsLeft = maxChars - text.length;
  const isOverLimit = charsLeft < 0;

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    fontSize: '16px',
    lineHeight: '22px',
    color: '#111827',
    resize: 'vertical',
    minHeight: fixedHeight ? '180px' : '48px',
    maxHeight: maxHeight,
    overflow: 'auto'
  };

  return (
    <div className='flex flex-col'>
      <textarea
        ref={textareaRef}
        style={textareaStyle}
        placeholder={placeholder}
        aria-label={ariaLabel}
        name={name}
        value={text}
        onChange={handleChange}
      />
      <p style={{
        marginTop: '6px',
        fontSize: '14px',
        lineHeight: '20px',
        color: isOverLimit ? '#dc2626' : '#4b5563'
      }}>
        {Math.abs(charsLeft)} characters {isOverLimit ? 'over' : 'left'}
      </p>
    </div>
  );
};

export default TextField;