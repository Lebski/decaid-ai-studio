import InputSection from 'components/Create/InputSection';
import Header from 'components/Common/Header';
import React from 'react';
import SettingsSection from 'components/Create/SettingsSection';
import Button from 'components/Forms/Button';
import generateIcon from 'assets/images/star-06-white.svg';
import FormContainer from 'components/Forms/FormContainer';

const CreatePage: React.FC = () => {
    return (
        <>
            <Header title="Create" />
            <InputSection />
            <SettingsSection />
            <FormContainer className="mt-8 justify-center">
                <Button
                    variant="primary"
                    type='button'
                    size='md'
                >
                    <img src={generateIcon} alt="Generate" className="w-5 h-5" />
                    Create
                </Button>
            </FormContainer>
        </>
    );
};

export default CreatePage;