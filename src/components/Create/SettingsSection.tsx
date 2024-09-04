import SectionWrapper from "components/Common/SectionWrapper";
import React from "react";
import PromptInput from "./PromptInput";
import AdditionalFiles from "./AdditionalFiles";

interface SettingsSectionProps {
    // Add any props if needed
}

const SettingsSection: React.FC<SettingsSectionProps> = () => {
    return (
        <SectionWrapper
            title="Settings"
            description="Adjust the settings to match the output to your desired style"
        >
            <></>
        </SectionWrapper>
    );
};

export default SettingsSection;