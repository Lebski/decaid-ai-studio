import SectionWrapper from "components/Common/SectionWrapper";
import React from "react";
import Toggle from "components/Forms/Toggle";
import FormLabel from 'components/Forms/FormLabel';
import DropDown, { DropdownItem } from "components/Forms/DropDown";

import linkedinIcon from "assets/images/linkedin-icon.svg";
import instagramIcon from "assets/images/instagram-icon.svg";
import tinderIcon from "assets/images/tinder-icon.svg";
import ToggleSwitch from "components/Forms/ToggleSwitch";
import FormContainer from "components/Forms/FormContainer";
import FormContent from "components/Forms/FormContent";


interface SettingsSectionProps {
    // Add any props if needed
}

const handleTaskTypeSelect = (value: string) => {
    console.log("Selected task type:", value);
}

const handlePlatformSelect = (item: DropdownItem) => {
    console.log('Selected platform type:', item.value);
};

const handleEnhancedSearchToggle = (value: boolean) => {
    console.log('Enhanced search:', value);
}


const SettingsSection: React.FC<SettingsSectionProps> = () => {
    return (
        <SectionWrapper
            title="Settings"
            description="Adjust the settings to match the output to your desired style"
        >
            {/* Tabs */}
            <FormContainer className="justify-center">
                <Toggle
                    options={[
                        { caption: "Social Media", value: "social-media" },
                        { caption: "Copy Writing", value: "copy-writing" },
                        { caption: "Audio Gen", value: "audio-gen" },
                        { caption: "Video Gen", value: "video-gen" },
                        { caption: "Blog Post", value: "blog-post" },
                    ]}
                    onSelect={handleTaskTypeSelect}
                />
            </FormContainer>

            {/* Platform */}
            <FormContainer className="gap-4">
                <FormLabel
                    label='Target Platform'
                    description='Select your desired platform'
                />
                <FormContent>
                    <DropDown items={[
                        { label: 'LinkedIn', value: 'linkedin', iconSrc: linkedinIcon },
                        { label: 'Instagram', value: 'instagram', iconSrc: instagramIcon },
                        { label: 'Tinder', value: 'tinder', iconSrc: tinderIcon },
                    ]}
                        onSelect={handlePlatformSelect}
                        defaultSelected="linkedin"
                    />
                </FormContent>
            </FormContainer>

            {/* Custom Style */}
            <FormContainer className="gap-4">
                <FormLabel
                    label='Custom Style Gudie'
                    description='Select from your own templates'
                />
                <FormContent>
                    <DropDown items={[
                        { label: 'Professional', value: 'professional' },
                        { label: 'Casual', value: 'Casual' },
                    ]}
                        onSelect={handlePlatformSelect}
                        placeholder="Select a style"
                    />
                </FormContent>
            </FormContainer>

            {/* Enhanced Search */}
            <FormContainer className="gap-4">
                <FormLabel
                    label='Enhanced Search'
                    description='This will perform a web search to get additional information '
                />
                <div className="flex flex-col flex-1 shrink max-w-lg basis-0 min-w-[320px] max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <ToggleSwitch label="Enhanced search" id="enhancedSearch" onToggle={handleEnhancedSearchToggle} />
                    </div>
                </div>
            </FormContainer>
        </SectionWrapper>
    );
};

export default SettingsSection;