import React from 'react';
import SectionWrapper from 'components/Common/SectionWrapper';
import AdditionalFiles from './AdditionalFiles';
import PromptInput from './PromptInput';

interface InputSectionProps {
    // Add any props if needed
}

const handleDotsClick = () => {
    console.log('Dots clicked in Content Creation Prompt section');
    // Add your logic here
};

const InputSection: React.FC<InputSectionProps> = () => {
    return (
        <SectionWrapper 
            title="Input"
            description="Create new content from existing files or texts." 
            onDotsClick={handleDotsClick}
        >
            <PromptInput />
            <AdditionalFiles />
        </SectionWrapper>
    );
};

export default InputSection;