import InputLabel from 'components/Forms/InputLabel';
import TextField from 'components/Forms/TextField';
import Toggle from 'components/Forms/Toggle';
import React from 'react';

interface InputFieldProps {
    // Add any props if needed
}

const handlePromptInputTypeSelect = (value: string) => {
    console.log("Selected value:", value);
};

const handlePromptInputChange = (value: string) => {
    console.log("Prompt input changed:", value);
}

const InputField: React.FC<InputFieldProps> = () => {
    return (
        <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
            <InputLabel
                label='Inspiration'
                description='Topics you want to write about'
                required={true}
            />
            <div className="flex flex-col flex-1 shrink max-w-lg basis-0 min-w-[320px] max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <Toggle
                        options={[
                            { caption: "Text", value: "text" },
                            { caption: "Voice", value: "voice" },
                        ]}
                        onSelect={handlePromptInputTypeSelect}
                    />
                    <TextField
                        name='prompt'
                        ariaLabel='Prompt'
                        placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                        maxChars={275}
                        onChange={handlePromptInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputField;