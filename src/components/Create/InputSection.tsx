import React from 'react';
import SectionWrapper from 'components/Common/SectionWrapper';
import AdditionalFiles from './AdditionalFiles';
import PromptInput from './PromptInput';

interface InputSectionProps {
    // Add any props if needed
}

const InputSection: React.FC<InputSectionProps> = () => {
    const handleDotsClick = () => {
        console.log('Dots clicked in Content Creation section');
        // Add your logic here
    };
    return (
        <SectionWrapper title="Start creating content" onDotsClick={handleDotsClick}>
            <PromptInput />
            <AdditionalFiles />
        </SectionWrapper>
    );
};

export default InputSection;