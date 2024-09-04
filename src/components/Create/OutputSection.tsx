import React from 'react';
import SectionWrapper from "components/Common/SectionWrapper";
import FormContainer from "components/Forms/FormContainer";
import FormContent from "components/Forms/FormContent";
import FormLabel from "components/Forms/FormLabel";

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
                    STUFF
                </FormContent>
            </FormContainer>
            <FormContainer className="gap-4">
                <FormLabel
                    label='Share'
                />
                <FormContent>
                    STUFF
                </FormContent>
            </FormContainer>
        </SectionWrapper>
    );
};

export default OutputSection;