import React from 'react';
import SectionWrapper from "components/Common/SectionWrapper";
import FormContainer from "components/Forms/FormContainer";
import FormContent from "components/Forms/FormContent";
import FormLabel from "components/Forms/FormLabel";
import TextField from 'components/Forms/TextField';
import Button from 'components/Forms/Button';

import generateIcon from "assets/images/star-06-white.svg";
import linkedinIcon from "assets/images/linkedin-icon.svg";
import copyIcon from "assets/images/copy-05-white.svg";

const handleRePromptInputChange = (value: string) => {
    console.log("RePrompt input changed:", value);
}

const handelRegenerateOutput = () => {
    console.log("Regenerate output");
}

const handleCopyToClipboard = () => {
    console.log("Copy to clipboard");
}

const handleShare = () => {
    console.log("Share on Linkedin");
}

const OutputSection: React.FC = () => {
    return (
        <SectionWrapper
            title="Output"
            description="Here you can control the output generation."
        >
            <FormContainer className="gap-4">
                <FormLabel
                    label='Output'
                    description='Edit your output before posting it'
                />
                <FormContent>
                   STUFF
                </FormContent>
            </FormContainer>
            <FormContainer className="gap-4">
                <FormLabel
                    label='Re-Prompt'
                    description='Do you need adjustments?'
                />
                <FormContent>
                    <div className="flex gap-2">
                        <div className="flex-grow">
                            <TextField 
                                name={'reprompt'} 
                                ariaLabel={'reprompt-input'} 
                                placeholder={'What would you like to change?'}
                                maxChars={275}
                                onChange={handleRePromptInputChange}
                                fixedHeight={false}
                            />
                        </div>
                        <div className="flex-shrink-0">
                            <Button 
                                type='button' 
                                variant='primary' 
                                size='square'
                                onClick={handelRegenerateOutput}
                            >
                                <img src={generateIcon} alt="Generate" className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </FormContent>
            </FormContainer>
            <FormContainer className="gap-4">
                <FormLabel
                    label='Share'
                />
                <FormContent>
                    <div className='flex flex-wrap gap-8'>
                        <Button 
                            type='button' 
                            variant='primary' 
                            size='md'
                            onClick={handleCopyToClipboard}
                        >
                            <img src={copyIcon} alt="Copy to clipboard" className="w-5 h-5" />
                            Copy to clipboard
                        </Button>
                        <Button 
                            type='button' 
                            variant='primary' 
                            size='md'
                            onClick={handleShare}
                        >
                            <img src={linkedinIcon} alt="Share on Linkedin" className="w-5 h-5" />
                            Share on Linkedin
                        </Button>
                    </div>
                </FormContent>
            </FormContainer>
        </SectionWrapper>
    );
};

export default OutputSection;