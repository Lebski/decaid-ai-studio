import React, { useState } from 'react';
import SectionWrapper from 'components/Common/SectionWrapper';
import FormContainer from 'components/Forms/FormContainer';
import FormLabel from 'components/Forms/FormLabel';
import FormContent from 'components/Forms/FormContent';
import Toggle from 'components/Forms/Toggle';
import TextField from 'components/Forms/TextField';
import FileUpload from 'components/Forms/FileUpload';
import AudioInputField from 'components/Forms/AudioInputField';

const InputSection: React.FC = () => {
  const [inputType, setInputType] = useState<'text' | 'voice'>('text');

  const handlePromptInputTypeSelect = (value: string) => {
    setInputType(value as 'text' | 'voice');
  };

  const handlePromptInputChange = (value: string) => {
    console.log('Prompt input changed:', value);
  };

  const handleFileUploaded = (file: File) => {
    console.log(`File uploaded: ${file.name}`);
    // Perform any additional actions with the uploaded file
  };

  const handleRecordingStart = () => {
    console.log('Recording started');
  };

  const handleRecordingStop = (audioBlob: Blob | null) => {
    console.log('Recording stopped, audio blob:', audioBlob);
    // Here you can send the audioBlob to your server or process it further
  };

  return (
    <SectionWrapper
      title="Input"
      description="Create new content from existing files or texts."
    >
      <FormContainer className="gap-4">
        <FormLabel
          label="Inspiration"
          description="Topics you want to write about"
          required={true}
        />
        <FormContent>
          <Toggle
            options={[
              { caption: 'Text', value: 'text' },
              { caption: 'Voice', value: 'voice' }
            ]}
            onSelect={handlePromptInputTypeSelect}
          />
          {inputType === 'text' ? (
            <TextField
              name="prompt"
              ariaLabel="Prompt"
              placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              maxChars={275}
              onChange={handlePromptInputChange}
              fixedHeight={true}
            />
          ) : (
            <AudioInputField
              onRecordingStart={handleRecordingStart}
              onRecordingStop={handleRecordingStop}
              maxDuration={120} // Set max duration to 2 minutes
            />
          )}
        </FormContent>
      </FormContainer>
      <FormContainer className="gap-4">
        <FormLabel
          label="Additional files"
          description="Upload additional knowledge"
        />
        <FormContent>
          <FileUpload
            allowedFormats={['svg', 'png', 'jpeg', 'jpg', 'gif']}
            formatMessage="SVG, PNG, JPG or GIF (max. 800x400px)"
            onFileUploaded={handleFileUploaded}
          />
        </FormContent>
      </FormContainer>
    </SectionWrapper>
  );
};

export default InputSection;
