import InputSection from 'components/Create/InputSection';
import Header from 'components/Common/Header';
import React from 'react';
import SettingsSection from 'components/Create/SettingsSection';

const CreatePage: React.FC = () => {
    return (
        <>
            <Header title="Create" />
            <InputSection />
            <SettingsSection />
        </>
    );
};

export default CreatePage;